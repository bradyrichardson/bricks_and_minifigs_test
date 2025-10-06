import { Router } from "express";

const router = Router();

// asynchronously get data as per the project requirements
router.get("/fetch", Controller.fetchData);

export default router;
