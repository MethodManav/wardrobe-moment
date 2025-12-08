import DatabaseConnection from "./database/connection";
import { RouteConfig } from "./routes";
import { createHTTPServer } from "./server";


new DatabaseConnection()
const server = new createHTTPServer();
server.start();
new RouteConfig(server.app);

