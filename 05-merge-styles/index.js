const fs = require("fs");
const path = require("path");
const pathToStyles = path.join(__dirname, "styles");
const pathToBundle = path.join(__dirname, "project-dist", "bundle.css");

fs.promises
  .readdir(pathToStyles, { withFileTypes: true })
  .then((files) => {
    const bundle = fs.createWriteStream(pathToBundle);
    files.forEach((file) => {
      if (path.extname(file.name) === ".css") {
        fs.createReadStream(path.join(pathToStyles, file.name)).addListener(
          "data",
          (data) => {
            bundle.write(data);
          }
        );
      }
    });
  })
  .catch((err) => console.error(err));
