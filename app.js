import express from "express";
import indexRouter from "./routes/index.js";
import colorRouter from "./routes/colors.js";
import categoriesRouter from "./routes/categoryDetails.js";

const app = express();

// Middleware to parse incoming JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route Definitions
app.use("/", indexRouter);
app.use("/colors", colorRouter);
app.use("/categories", categoriesRouter); 

console.log("Routes registered: /, /colors, /categories");

// Handle Undefined Routes
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

export default app;
