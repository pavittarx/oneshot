import express from "express";
import { collegeRouter } from "./routes/index";

const app = express();

app.use("/colleges", collegeRouter);

app.get("/", (_, res) => {
  res.json({
    message: "Hello World",
  });
});

app.listen(process.env.PORT || 5000, () =>
  console.log(`Listening on ${process.env.PORT ? process.env.PORT : 5000}`)
);

export default app;
