import express from "express";
import cors from "cors";

import indexRouter from "./routes/index.js";
import colorRouter from "./routes/colors.js";
import categoriesRouter from "./routes/categoryDetails.js";
import seoContentDetailsRouter from "./routes/seoContentDetails.js";
import mainSeoRouter from "./routes/mainSeo.js";
import userRouter from "./routes/user.js"
import adminRouter from "./routes/administratorRoutes.js";
import pncCityRouter from "./routes/pncCitiesRoutes.js";
import blogsRouter from "./routes/blogRoutes.js";
import pincodesRouter from "./routes/pincodes.js";
import providerRouter from "./routes/providersRoutes.js";
import homepageRouter from "./routes/homepage.js";
import advGalleryRouter from "./routes/advRoutes.js";
import faqRouter from "./routes/faqRouters.js";
import footerRouter from "./routes/footerRoutes.js";
import pageContentRouter from "./routes/pageContentRoutes.js";
import prnvCartRouter from "./routes/prnvCartRoutes.js"
import servicesRouter from "./routes/serviceRoutes.js"

const app = express();

// Middleware to parse incoming JSON and form data
app.use(cors());
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
app.use("/api/blogs", blogsRouter);
app.use("/api/pincodes", pincodesRouter);
app.use("/api/providers", providerRouter);
app.use("/api/serviceareas", homepageRouter);
app.use("/api/ads", advGalleryRouter);
app.use("/api/faq", faqRouter);
app.use("/api/footer", footerRouter);
app.use("/api/page-content", pageContentRouter);
app.use("/api/cart", prnvCartRouter);
app.use("/api/services", servicesRouter);

// Handle Undefined Routes
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

export default app;
