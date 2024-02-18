import express from 'express';
import { Search, ClearCache } from "../controllers"
import { cacheMiddleware } from "../middleware"

const routes = express.Router();

/** End point routes **/
routes.get("/search", cacheMiddleware, Search);

routes.get("/clear-cache", ClearCache);

export default routes 