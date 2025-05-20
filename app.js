import express from "express";
import indexRouter from "./routes/index.js";
import colorRouter from "./routes/colors.js";
import categoriesRouter from "./routes/categoryDetails.js";
import seoContentDetailsRouter from "./routes/seoContentDetails.js";

const app = express();

// Middleware to parse incoming JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route Definitions
app.use("/api", indexRouter);
app.use("/api/colors", colorRouter);
app.use("/api/categories", categoriesRouter); 
app.use("/api/seo_content_details", seoContentDetailsRouter)

// Handle Undefined Routes
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

export default app;
