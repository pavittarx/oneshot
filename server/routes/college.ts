import express from "express";
import { Err, Success } from "~/utils/response";

const router = express.Router();

router.get("/", (req, res) => {
  const { name, id } = req.params;
});

router.get("/search", (req, res) => {
  const { location, noOfStudents, courses } = req.params;
});

export default router;
