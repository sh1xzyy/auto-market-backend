import { Router } from "express";
import {
  getCarModelsController,
  getCarOptionsController,
} from "../controllers/options.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";

export const optionsRoutes = Router();

optionsRoutes.get("/car_brands", ctrlWrapper(getCarOptionsController));
optionsRoutes.get("/car_models/:brandId", ctrlWrapper(getCarModelsController));
