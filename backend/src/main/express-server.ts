import bodyParser, { json } from "body-parser";
import Express, { Router } from "express";

const app = Express();

const configureExpressApp = (routes?: Router) => {
  // Middlewares
  app.use(bodyParser.json());

  //Routes
  if (routes) app.use("/", routes);

  // Listen method
  const listen = (port: number) => {
    app.listen(port, () => console.log("listening on port " + port));
  };

  return { app, listen };
};

export { configureExpressApp };
