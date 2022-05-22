import bodyParser from "body-parser";
import cors from "cors";
import Express, { Router } from "express";
import { errorHandler } from "../input/controllers";

const app = Express();

const configureExpressApp = (routes?: Router) => {
  // Middlewares
  app.use(cors());
  app.use(bodyParser.json());

  //Routes
  if (routes) app.use("/", routes);

  app.use(errorHandler);

  // Listen method
  const listen = (port: number) => {
    app.listen(port, () => console.log("listening on port " + port));
  };

  return { app, listen };
};

export { configureExpressApp };
