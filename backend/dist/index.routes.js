import { Router } from "express";
import Controller from "./index.controller.js";
const router = Router();
// asynchronously get data as per the project requirements
router.get("/fetch", Controller.fetchData);
export default router;
//# sourceMappingURL=index.routes.js.map