const express = require("express");
const app = express();
const Port = process.env.PORT || 5000;
const cors = require("cors");
app.use(cors());
const categories = require("./data/categories.json");
const courses = require("./data/courses.json");
app.get("/", (req, res) => {
  res.send("Server is running");
});
app.get("/categories", (req, res) => {
  res.send(categories);
});
app.get("/courses", (req, res) => {
  res.send(courses);
});
app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourse = courses.find((c) => c.id == id);
  res.send(selectedCourse);
});
app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  const selectedCategory = courses.filter((c) => c.category_id == id);
  res.send(selectedCategory);
});
app.listen(Port, () => {
  console.log("server running on port", Port);
});
