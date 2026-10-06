const express = require("express");
const prisma = require("@prisma/client");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Finance Tracker API is running");
});

app.get("/expenses", async (req, res) => {
  const expenses = await prisma.expense.findMany();
  res.json(expenses);
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});