import { mockLegoSets } from "./shared/mock_data.js";
class Controller {
    static async fetchData(request, response) {
        response.status(200).send(mockLegoSets);
    }
    static async parseCSV() { }
}
export default Controller;
//# sourceMappingURL=index.controller.js.map