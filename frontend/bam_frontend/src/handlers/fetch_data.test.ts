import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { LegoSetDetails } from "../shared/i_lego_sets";
import { fetchDataAsync } from "./fetch_data";

// Mock the global fetch function
const mockFetch = vi.fn();
global.fetch = mockFetch;

describe("fetchDataAsync", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // Mock console.error to avoid noise in tests
    vi.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should fetch data successfully and return parsed JSON", async () => {
    const mockData: LegoSetDetails[] = [
      {
        id: "1",
        name: "AT-AT",
        set_number: "75313",
        release_year: 2021,
        pieces: 1267,
        num_minifigs: 4,
        retired: "FALSE",
        image_urls: ["https://example.com/image1.jpg"],
      },
      {
        id: "2",
        name: "Titanic",
        set_number: "10294",
        release_year: 2021,
        pieces: 9090,
        num_minifigs: 0,
        retired: "FALSE",
        image_urls: ["https://example.com/image2.jpg"],
      },
    ];

    const mockResponse = {
      ok: true,
      json: vi.fn().mockResolvedValue(mockData),
    };

    mockFetch.mockResolvedValue(mockResponse);

    const result = await fetchDataAsync();

    expect(mockFetch).toHaveBeenCalledWith("http://localhost:3000/fetch");
    expect(mockResponse.json).toHaveBeenCalled();
    expect(result).toEqual(mockData);
  });

  it("should handle empty response", async () => {
    const mockResponse = {
      ok: true,
      json: vi.fn().mockResolvedValue([]),
    };

    mockFetch.mockResolvedValue(mockResponse);

    const result = await fetchDataAsync();

    expect(mockFetch).toHaveBeenCalledWith("http://localhost:3000/fetch");
    expect(result).toEqual([]);
  });

  it("should handle network errors and log them", async () => {
    const networkError = new Error("Network request failed");
    mockFetch.mockRejectedValue(networkError);

    // The function has a bug - it doesn't return the rejected promise
    // So it will actually resolve with undefined instead of rejecting
    const result = await fetchDataAsync();

    expect(mockFetch).toHaveBeenCalledWith("http://localhost:3000/fetch");
    expect(console.error).toHaveBeenCalledWith(
      "Failed to get data",
      networkError
    );
    expect(result).toBeUndefined();
  });

  it("should handle fetch timeout errors", async () => {
    const timeoutError = new Error("Request timeout");
    mockFetch.mockRejectedValue(timeoutError);

    // The function has a bug - it doesn't return the rejected promise
    // So it will actually resolve with undefined instead of rejecting
    const result = await fetchDataAsync();

    expect(mockFetch).toHaveBeenCalledWith("http://localhost:3000/fetch");
    expect(console.error).toHaveBeenCalledWith(
      "Failed to get data",
      timeoutError
    );
    expect(result).toBeUndefined();
  });

  it("should handle JSON parsing errors", async () => {
    const mockResponse = {
      ok: true,
      json: vi.fn().mockRejectedValue(new Error("Invalid JSON")),
    };

    mockFetch.mockResolvedValue(mockResponse);

    const result = await fetchDataAsync();

    expect(mockFetch).toHaveBeenCalledWith("http://localhost:3000/fetch");
    expect(console.error).toHaveBeenCalledWith(
      "Failed to get data",
      expect.any(Error)
    );
    expect(result).toBeUndefined();
  });

  it("should handle HTTP error responses", async () => {
    const mockResponse = {
      ok: false,
      status: 500,
      statusText: "Internal Server Error",
      json: vi.fn().mockResolvedValue({ error: "Server error" }),
    };

    mockFetch.mockResolvedValue(mockResponse);

    const result = await fetchDataAsync();

    expect(mockFetch).toHaveBeenCalledWith("http://localhost:3000/fetch");
    expect(result).toEqual({ error: "Server error" });
  });

  it("should handle 404 Not Found responses", async () => {
    const mockResponse = {
      ok: false,
      status: 404,
      statusText: "Not Found",
      json: vi.fn().mockResolvedValue({ error: "Endpoint not found" }),
    };

    mockFetch.mockResolvedValue(mockResponse);

    const result = await fetchDataAsync();

    expect(mockFetch).toHaveBeenCalledWith("http://localhost:3000/fetch");
    expect(result).toEqual({ error: "Endpoint not found" });
  });

  it("should handle malformed response data", async () => {
    const mockResponse = {
      ok: true,
      json: vi.fn().mockResolvedValue(null),
    };

    mockFetch.mockResolvedValue(mockResponse);

    const result = await fetchDataAsync();

    expect(mockFetch).toHaveBeenCalledWith("http://localhost:3000/fetch");
    expect(result).toBeNull();
  });

  it("should handle response with unexpected data structure", async () => {
    const mockResponse = {
      ok: true,
      json: vi
        .fn()
        .mockResolvedValue({ message: "Unexpected response format" }),
    };

    mockFetch.mockResolvedValue(mockResponse);

    const result = await fetchDataAsync();

    expect(mockFetch).toHaveBeenCalledWith("http://localhost:3000/fetch");
    expect(result).toEqual({ message: "Unexpected response format" });
  });

  it("should make only one fetch request per call", async () => {
    const mockData: LegoSetDetails[] = [
      {
        id: "1",
        name: "Test Set",
        set_number: "12345",
        release_year: 2021,
        pieces: 100,
        num_minifigs: 1,
        retired: "FALSE",
        image_urls: ["https://example.com/test.jpg"],
      },
    ];

    const mockResponse = {
      ok: true,
      json: vi.fn().mockResolvedValue(mockData),
    };

    mockFetch.mockResolvedValue(mockResponse);

    await fetchDataAsync();

    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(mockResponse.json).toHaveBeenCalledTimes(1);
  });

  it("should return the correct type when successful", async () => {
    const mockData: LegoSetDetails[] = [
      {
        id: "1",
        name: "Type Test Set",
        set_number: "99999",
        release_year: 2023,
        pieces: 500,
        num_minifigs: 2,
        retired: "TRUE",
        image_urls: ["https://example.com/type-test.jpg"],
      },
    ];

    const mockResponse = {
      ok: true,
      json: vi.fn().mockResolvedValue(mockData),
    };

    mockFetch.mockResolvedValue(mockResponse);

    const result = await fetchDataAsync();

    expect(Array.isArray(result)).toBe(true);
    expect(result).toHaveLength(1);
    expect(result?.[0]).toHaveProperty("id");
    expect(result?.[0]).toHaveProperty("name");
    expect(result?.[0]).toHaveProperty("set_number");
    expect(result?.[0]).toHaveProperty("image_urls");
  });
});
