import express from "express";

import indexRouter from "./routes/index.js";
import colorRouter from "./routes/colors.js";
import categoryDetailsRouter from "./routes/categoryDetails.js";

const app = express();

app.use("/", indexRouter);
app.use("/colors", colorRouter);
app.use("/categoryDetails", categoryDetailsRouter);

export default app;