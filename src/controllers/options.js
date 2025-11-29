import { getCarModels, getCarOptions } from "../services/options.js";

export const getCarOptionsController = async (req, res) => {
  const options = await getCarOptions();

  res.status(200).json({
    status: 200,
    message: "Successfully get car options",
    data: options,
  });
};

export const getCarModelsController = async (req, res) => {
  const models = await getCarModels();

  res.status(200).json({
    status: 200,
    message: "Successfully get car models",
    data: models,
  });
};
