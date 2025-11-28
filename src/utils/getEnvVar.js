import "dotenv/config";

export const getEnvVar = (key, defaultKey) => {
  return process.env[key] || defaultKey;
};
