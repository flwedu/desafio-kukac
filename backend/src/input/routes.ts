import { Router } from "express";

const router = Router();

const configureRoutes = () => {
  router.get("/status", (req, res) => {
    return res.status(200).send();
  });
  router.post("palindrome", (req, res) => {});
  router.post("/money", (req, res) => {});
  router.post("/card", (req, res) => {});
  router.post("/motorcycle", (req, res) => {});

  return router;
};

export default configureRoutes;
