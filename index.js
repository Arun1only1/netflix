import express from "express";
import movieRoutes from "./movies/movies.routes.js";

const app = express();
app.use(express.json());

// register routes
app.use(movieRoutes);

const port = 8000;

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
