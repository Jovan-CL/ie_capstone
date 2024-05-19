import { Router } from "express";

const router = Router();

router.get("/bulletin", (req, res) => {
  res.send("WELCOME TO BULLETIN PAGE!!!");
});

export default router;
