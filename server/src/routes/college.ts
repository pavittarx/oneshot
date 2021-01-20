import express from "express";
import { Err, Result } from "~/utils/response";
import {
  getCollegeById,
  getCollegesByName,
  getCollegesList,
  getSimilarColleges,
} from "~/libs/colleges";

const router = express.Router();

router.get("/", async (req, res) => {
  const { name, id } = req.query;

  if (id) {
    const college = await getCollegeById(id as string);

    if (college) res.json(Result([college]));
    else res.json(Result([]));

    return;
  }

  if (name) {
    const colleges = await getCollegesByName(name as string);

    if (colleges) {
      res.json(Result(colleges));
    } else {
      res.status(400).json(Err("No colleges available for the given name"));
    }

    return;
  }

  const colleges = await getCollegesList();
  res.json(Result(colleges));
});

router.get("/similar", async (req, res) => {
  const { id } = req.query;

  const result = await getSimilarColleges(id as string);

  res.json(result);
});

export default router;
