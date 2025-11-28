import mysql from "mysql2/promise";
import { getEnvVar } from "../utils/getEnvVar.js";

let connection;

export const initDBConnection = async () => {
  try {
    connection = await mysql.createConnection({
      host: getEnvVar("DB_HOST"),
      user: getEnvVar("DB_USER"),
      password: getEnvVar("DB_PASSWORD"),
      database: getEnvVar("DB_NAME"),
      port: getEnvVar("DB_PORT"),
    });
    console.log("Successfully connected to MySQL");
    return connection;
  } catch (error) {
    console.log("Server connection failed:", error);
  }
};

export const getConnection = () => connection;
