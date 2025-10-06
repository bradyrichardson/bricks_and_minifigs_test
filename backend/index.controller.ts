import { Request, Response } from "express";
import { mockLegoSets } from "./shared/mock_data.js";

class Controller {
  static async fetchData(request: Request, response: Response) {
    response
      .status(200)
      .send([
        ...mockLegoSets,
        ...mockLegoSets,
        ...mockLegoSets,
        ...mockLegoSets,
      ]);
  }

  static async parseCSV() {}
}

export default Controller;
