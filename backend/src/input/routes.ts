import { Router } from "express";
import IVehicleRepository from "../output/repositories/vehicle-repository";
import {
  ListVehiclesController,
  MoneyController,
  PalindromeController,
  RegisterCarController,
  RegisterMotorcycleController,
} from "./controllers";

const router = Router();

const configureRoutes = (vehiclesRepo: IVehicleRepository) => {
  router.get("/status", (req, res) => {
    return res.status(200).send();
  });
  router.get("/vehicles", (req, res) => {
    new ListVehiclesController(vehiclesRepo).handle(req, res);
  });
  router.post("/palindrome", (req, res) => {
    new PalindromeController().handle(req, res);
  });
  router.post("/money", (req, res) => {
    new MoneyController().handle(req, res);
  });
  router.post("/car", (req, res) => {
    new RegisterCarController(vehiclesRepo).handle(req, res);
  });
  router.post("/motorcycle", (req, res) => {
    new RegisterMotorcycleController(vehiclesRepo).handle(req, res);
  });

  return router;
};

export default configureRoutes;
