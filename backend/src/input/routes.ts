import { Router } from "express";
import IVehicleRepository from "../output/repositories/vehicle-repository";
import {
  ListVehiclesController,
  MoneyController,
  PalindromeController,
  RegisterVehicleController,
} from "./controllers";

const router = Router();

const configureRoutes = (vehiclesRepo: IVehicleRepository) => {
  router.get("/status", (req, res) => {
    return res.status(200).send();
  });
  router.get("/vehicles", (req, res, next) => {
    new ListVehiclesController(vehiclesRepo).handle(req, res, next);
  });
  router.post("/palindrome", (req, res, next) => {
    new PalindromeController().handle(req, res, next);
  });
  router.post("/money", (req, res, next) => {
    new MoneyController().handle(req, res, next);
  });
  router.post("/vehicles", (req, res, next) => {
    new RegisterVehicleController(vehiclesRepo).handle(req, res, next);
  });

  return router;
};

export default configureRoutes;
