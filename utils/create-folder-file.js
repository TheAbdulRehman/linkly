const fs = require("fs");
const path = require("path");



exports.createFolderAndFile = (folderName, fileName, content) => {
  


  // Create folder if it doesn't exist
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
  }

    const filePath = path.join(folderName, fileName);
  // Create file inside folder
  fs.writeFile(filePath, content, (err) => {
    if (err) {
      console.log("Error:", err);
    } else {
      console.log("File created inside folder!");
      res.json({ message: "Folder and file created successfully!" });
    }
  });
};


