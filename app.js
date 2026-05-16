const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/abc", (req, res) => {
  res.json({ message: "Hello from Express + pnpm", path: "/abc", dev: true });
});

app.get("/create-folder-file", (req, res) => {
  const folderName = "myFolder";
  const fileName = "myFile.txt";
  const content = "This is the content of the file.";

  // Create folder if it doesn't exist
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
  }

  const filePath = path.join(folderName, fileName);
  // Create file inside folder
  fs.writeFile(filePath                 , content, (err) => {
    if (err) {
      console.log("Error:", err);
      res.status(500).json({ message: "Error creating folder and file" });
    } else {
      console.log("File created inside folder!");
      res.json({ message: "Folder and file created successfully!" });
    }
  });
});

  // Create folder if i

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});