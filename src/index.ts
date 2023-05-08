import serverlessExpress from "@vendia/serverless-express";
import express from "express";
import bodyParser from "body-parser";

const app = express();
const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get("/", (_req, res, _next) => {
  return res.status(200).json({
    message: "Hello from root!",
  });
});

router.get("/hello", (_req, res, _next) => {
  return res.status(200).json({
    message: "Hello from path!",
  });
});

router.use((_req, res, _next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

app.use("/", router);

export const handler = serverlessExpress({ app });
