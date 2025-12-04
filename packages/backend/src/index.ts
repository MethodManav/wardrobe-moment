import DatabaseConnection from "./database/connection.js";
import { createHTTPServer } from "./server.js";

new DatabaseConnection()
const server = new createHTTPServer();
server.start();

