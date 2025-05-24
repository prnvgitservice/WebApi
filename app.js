import express from "express";

import indexRouter from "./routes/index.js";
import colorRouter from "./routes/colors.js";
import categoriesRouter from "./routes/categoryDetails.js";
import seoContentDetailsRouter from "./routes/seoContentDetails.js";
import mainSeoRouter from "./routes/mainSeo.js";
import userRouter from "./routes/user.js"
import adminRouter from "./routes/administratorRoutes.js";
import pncCityRouter from "./routes/pncCitiesRoutes.js";
import blogpostRouter from "./routes/blogPostRoutes.js";
import pincodesRouter from "./routes/pincodes.js";

const app = express();

// Middleware to parse incoming JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route Definitions
app.use("/api", indexRouter);
app.use("/api/colors", colorRouter);
app.use("/api/categories", categoriesRouter); 
app.use("/api/seo_content_details", seoContentDetailsRouter);
app.use("/api/main_seo", mainSeoRouter);
app.use("/api/users", userRouter);
app.use("/api/admin", adminRouter);
app.use("/api/cities", pncCityRouter);
app.use("/api/blogposts", blogpostRouter);
app.use("/api/pincodes", pincodesRouter);

// Handle Undefined Routes
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

export default app;
