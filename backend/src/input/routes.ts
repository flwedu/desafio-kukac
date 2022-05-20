import { Router } from "express";
import { MoneyController, PalindromeController } from "./controllers";

const router = Router();

const configureRoutes = () => {
  router.get("/status", (req, res) => {
    return res.status(200).send();
  });
  router.post("/palindrome", (req, res) => {
    new PalindromeController().handle(req, res);
  });
  router.post("/money", (req, res) => {
    new MoneyController().handle(req, res);
  });
  router.post("/card", (req, res) => {});
  router.post("/motorcycle", (req, res) => {});

  return router;
};

export default configureRoutes;
