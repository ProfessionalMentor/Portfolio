import express from "express";
import mongoose from "mongoose";
const app = express();
import ejs from "ejs";
import { fileURLToPath } from "url";
import path from "path";
const port = process.env.PORT || 3000;

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set the path to the views directory
app.set("views", path.join(__dirname, "views"));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

//app.use(express.static(staticpath));

/* GET home page. */

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/project", (req, res) => {
  res.render("project");
});

app.get("/services", (req, res) => {
  res.render("services");
});

app.get("/send", (req, res) => {
  res.render("send");
});

app.listen(port, () => {
  console.log("listening to the port  ${port}");
});
