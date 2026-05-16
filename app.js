const express = require("express");

const app = express();
const PORT = 3000;

app.get("/abc", (req, res) => {
  res.json({ message: "Hello from Express + pnpm", path: "/abc", dev: true });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});