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

  app.get("/cars", async (req, res) => {
    try {
      const connection = getConnection();
      const query = "SELECT * FROM car_brands";
      const data = await connection.query(query);

      res.status(200).json({
        status: 200,
        message: "Successfully get cars",
        data,
      });
    } catch (error) {
      console.log("error", error);
    }
  });

  app.use(notFoundHandler);
  app.use(errorHandler);

  const PORT = Number(getEnvVar("PORT"));

  app.listen(PORT, () => console.log(`Server is running on ${PORT} port`));
};
