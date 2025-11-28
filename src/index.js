import { initDBConnection } from "./db/initDBConnection.js";
import { setupServer } from "./server.js";

(async () => {
  await initDBConnection();
  setupServer();
})();
