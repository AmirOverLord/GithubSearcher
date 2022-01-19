import express from 'express';
import {Search, ClearCache} from "../controllers"

const routes = express.Router();

/** End point routes **/
routes.get("/search", Search);

routes.get("/clear-cache", ClearCache);

export default routes