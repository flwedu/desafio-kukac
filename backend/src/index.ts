import configureRoutes from "./input/routes";
import { configureExpressApp } from "./main/express-server";
import { JsonVehicleRepository } from "./output/repositories/json-vehicle-repository";

const vehiclesRepo = new JsonVehicleRepository("vehiclesdb.json");
const PORT = 3002;
const routes = configureRoutes(vehiclesRepo);
const { listen } = configureExpressApp(routes);

listen(PORT);

process.on("uncaughtException", (event) => {
  console.error("Uncaught exception: ", event);
});

process.on("unhandledRejection", (event) => {
  console.error("Unhandled rejection: ", event);
});
