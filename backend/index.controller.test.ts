import csv from "csv-parser";
import { Request, Response } from "express";
import fs from "fs";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import Controller, { zipData } from "./index.controller.js";

// Mock fs module
vi.mock("fs");
const mockedFs = vi.mocked(fs);

// Mock csv-parser
vi.mock("csv-parser");

describe("Controller", () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let mockStatus: any;
  let mockSend: any;

  beforeEach(() => {
    mockStatus = vi.fn().mockReturnThis();
    mockSend = vi.fn();
    mockResponse = {
      status: mockStatus,
      send: mockSend,
    };
    mockRequest = {};

    // Clear all mocks
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe("parseCSV", () => {
    it("should parse CSV file successfully", async () => {
      const mockData = [
        { id: "1", name: "Test Set", set_number: "12345" },
        { id: "2", name: "Another Set", set_number: "67890" },
      ];

      // Create a mock transform stream that behaves like csv-parser
      const mockTransformStream = {
        on: vi.fn().mockImplementation((event, callback) => {
          if (event === "data") {
            // Simulate data events
            setTimeout(() => {
              mockData.forEach(callback);
            }, 0);
          } else if (event === "end") {
            // Simulate end event
            setTimeout(() => {
              callback();
            }, 0);
          }
          return mockTransformStream; // Allow chaining
        }),
      };

      const mockReadStream = {
        pipe: vi.fn().mockReturnValue(mockTransformStream),
      };

      mockedFs.createReadStream.mockReturnValue(mockReadStream as any);
      (csv as any).mockReturnValue(mockTransformStream);

      const result = await Controller.parseCSV("test.csv");

      expect(mockedFs.createReadStream).toHaveBeenCalledWith("test.csv");
      expect(result).toEqual(mockData);
    });

    it("should handle CSV parsing errors", async () => {
      // Create a mock transform stream that triggers an error
      const mockTransformStream = {
        on: vi.fn().mockImplementation((event, callback) => {
          if (event === "error") {
            // Simulate error event
            setTimeout(() => {
              callback(new Error("CSV parsing failed"));
            }, 0);
          }
          return mockTransformStream; // Allow chaining
        }),
      };

      const mockReadStream = {
        pipe: vi.fn().mockReturnValue(mockTransformStream),
      };

      mockedFs.createReadStream.mockReturnValue(mockReadStream as any);
      (csv as any).mockReturnValue(mockTransformStream);

      await expect(Controller.parseCSV("test.csv")).rejects.toThrow(
        "CSV parsing failed"
      );
    });

    it("should handle file read errors", async () => {
      mockedFs.createReadStream.mockImplementation(() => {
        throw new Error("File not found");
      });

      await expect(Controller.parseCSV("nonexistent.csv")).rejects.toThrow(
        "File not found"
      );
    });
  });

  describe("fetchData", () => {
    it("should fetch and combine data successfully", async () => {
      const mockSetData = [
        {
          id: "1",
          name: "AT-AT",
          set_number: "75313",
          release_year: 2021,
          pieces: 1267,
          num_minifigs: 4,
          retired: "FALSE",
        },
        {
          id: "2",
          name: "Titanic",
          set_number: "10294",
          release_year: 2021,
          pieces: 9090,
          num_minifigs: 0,
          retired: "FALSE",
        },
      ];

      const mockImageData = [
        { lego_set_id: "1", image_url: "https://example.com/image1.jpg" },
        { lego_set_id: "1", image_url: "https://example.com/image2.jpg" },
        { lego_set_id: "2", image_url: "https://example.com/image3.jpg" },
      ];

      // Mock parseCSV to return our test data
      const parseCSVSpy = vi
        .spyOn(Controller, "parseCSV")
        .mockResolvedValueOnce(mockSetData)
        .mockResolvedValueOnce(mockImageData);

      await Controller.fetchData(
        mockRequest as Request,
        mockResponse as Response
      );

      expect(parseCSVSpy).toHaveBeenCalledWith("project-lego_sets.csv");
      expect(parseCSVSpy).toHaveBeenCalledWith("project-lego_set_images.csv");
      expect(mockStatus).toHaveBeenCalledWith(200);
      expect(mockSend).toHaveBeenCalledWith([
        {
          id: "1",
          name: "AT-AT",
          set_number: "75313",
          release_year: 2021,
          pieces: 1267,
          num_minifigs: 4,
          retired: "FALSE",
          image_urls: [
            "https://example.com/image1.jpg",
            "https://example.com/image2.jpg",
          ],
        },
        {
          id: "2",
          name: "Titanic",
          set_number: "10294",
          release_year: 2021,
          pieces: 9090,
          num_minifigs: 0,
          retired: "FALSE",
          image_urls: ["https://example.com/image3.jpg"],
        },
      ]);
    });

    it("should handle CSV parsing errors in fetchData", async () => {
      const parseCSVSpy = vi
        .spyOn(Controller, "parseCSV")
        .mockRejectedValueOnce(new Error("Failed to parse sets CSV"));

      await expect(
        Controller.fetchData(mockRequest as Request, mockResponse as Response)
      ).rejects.toThrow("Failed to parse sets CSV");

      expect(parseCSVSpy).toHaveBeenCalledWith("project-lego_sets.csv");
    });
  });
});

describe("zipData", () => {
  it("should combine set data with image URLs correctly", () => {
    const setData = [
      {
        id: "1",
        name: "AT-AT",
        set_number: "75313",
        release_year: 2021,
        pieces: 1267,
        num_minifigs: 4,
        retired: "FALSE",
      },
      {
        id: "2",
        name: "Titanic",
        set_number: "10294",
        release_year: 2021,
        pieces: 9090,
        num_minifigs: 0,
        retired: "FALSE",
      },
    ];

    const imageData = [
      { lego_set_id: "1", image_url: "https://example.com/image1.jpg" },
      { lego_set_id: "1", image_url: "https://example.com/image2.jpg" },
      { lego_set_id: "2", image_url: "https://example.com/image3.jpg" },
      { lego_set_id: "3", image_url: "https://example.com/image4.jpg" }, // This should be ignored
    ];

    const result = zipData(setData, imageData);

    expect(result).toHaveLength(2);
    expect(result[0]).toEqual({
      id: "1",
      name: "AT-AT",
      set_number: "75313",
      release_year: 2021,
      pieces: 1267,
      num_minifigs: 4,
      retired: "FALSE",
      image_urls: [
        "https://example.com/image1.jpg",
        "https://example.com/image2.jpg",
      ],
    });
    expect(result[1]).toEqual({
      id: "2",
      name: "Titanic",
      set_number: "10294",
      release_year: 2021,
      pieces: 9090,
      num_minifigs: 0,
      retired: "FALSE",
      image_urls: ["https://example.com/image3.jpg"],
    });
  });

  it("should handle sets with no images", () => {
    const setData = [
      {
        id: "1",
        name: "AT-AT",
        set_number: "75313",
        release_year: 2021,
        pieces: 1267,
        num_minifigs: 4,
        retired: "FALSE",
      },
    ];

    const imageData: any[] = [];

    const result = zipData(setData, imageData);

    expect(result).toHaveLength(1);
    expect(result[0].image_urls).toEqual([]);
  });

  it("should handle empty set data", () => {
    const setData: any[] = [];
    const imageData = [
      { lego_set_id: "1", image_url: "https://example.com/image1.jpg" },
    ];

    const result = zipData(setData, imageData);

    expect(result).toHaveLength(0);
  });

  it("should handle empty image data", () => {
    const setData = [
      {
        id: "1",
        name: "AT-AT",
        set_number: "75313",
        release_year: 2021,
        pieces: 1267,
        num_minifigs: 4,
        retired: "FALSE",
      },
    ];

    const imageData: any[] = [];

    const result = zipData(setData, imageData);

    expect(result).toHaveLength(1);
    expect(result[0].image_urls).toEqual([]);
  });

  it("should preserve all set properties", () => {
    const setData = [
      {
        id: "1",
        name: "AT-AT",
        set_number: "75313",
        release_year: 2021,
        pieces: 1267,
        num_minifigs: 4,
        retired: "TRUE",
        theme: "Star Wars",
        price: 159.99,
      },
    ];

    const imageData = [
      { lego_set_id: "1", image_url: "https://example.com/image1.jpg" },
    ];

    const result = zipData(setData, imageData);

    expect(result[0]).toMatchObject({
      id: "1",
      name: "AT-AT",
      set_number: "75313",
      release_year: 2021,
      pieces: 1267,
      num_minifigs: 4,
      retired: "TRUE",
      theme: "Star Wars",
      price: 159.99,
      image_urls: ["https://example.com/image1.jpg"],
    });
  });
});
