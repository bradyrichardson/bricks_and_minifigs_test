import csv from "csv-parser";
import { Request, Response } from "express";
import fs from "fs";
import { LegoSetDetails } from "./shared/i_lego_sets.js";

export const zipData = (setData, imageUrlData): LegoSetDetails[] => {
  const setMap = {};

  // initialize sets with empty image_urls array
  for (const set of setData) {
    setMap[set.id] = {
      ...set,
      image_urls: [],
    };
  }

  // add image URLs to sets
  for (const imgs of imageUrlData) {
    // only add image URLs for sets that exist
    if (setMap[imgs.lego_set_id]) {
      setMap[imgs.lego_set_id].image_urls.push(imgs.image_url);
    }
  }

  // convert the map back to an array
  return Object.values(setMap);
};

class Controller {
  static async fetchData(request: Request, response: Response) {
    try {
      const setData = await Controller.parseCSV("project-lego_sets.csv");
      const imageUrlData = await Controller.parseCSV(
        "project-lego_set_images.csv"
      );

      const combinedData = zipData(setData, imageUrlData);

      response.status(200).send(combinedData);
    } catch (error) {
      response.status(500);
    }
  }

  static async parseCSV(filePath: string): Promise<any[]> {
    return new Promise((resolve, reject) => {
      const results = [];

      fs.createReadStream(filePath)
        .pipe(csv())
        .on("data", (data) => results.push(data))
        .on("end", () => {
          resolve(results);
        })
        .on("error", (error) => {
          reject(error);
        });
    });
  }
}

export default Controller;
