import configureRoutes from "./input/routes";
import { configureExpressApp } from "./main/express-server";

const PORT = 3002;
const routes = configureRoutes();
const { listen } = configureExpressApp(routes);

listen(PORT);
