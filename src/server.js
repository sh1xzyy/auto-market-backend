import express from "express";
import cors from "cors";
import { getEnvVar } from "./utils/getEnvVar.js";
import { getConnection } from "./db/initDBConnection.js";
import { notFoundHandler } from "./middleware/notFoundHandler.js";
import { errorHandler } from "./middleware/errorHandler.js";

export const setupServer = () => {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.use(notFoundHandler);
  app.use(errorHandler);

  const PORT = Number(getEnvVar("PORT"));

  app.listen(PORT, () => console.log(`Server is running on ${PORT} port`));
};
