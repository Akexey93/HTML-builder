const fs = require("fs");
const path = require("path");
const pathToFolder = path.join(__dirname, "secret-folder");

fs.readdir(pathToFolder, { withFileTypes: true }, (err, files) => {
  if (err) {
    console.log(err);
  } else {
    files.forEach((file) => {
      if (file.isFile()) {
        const pathToFile = path.join(pathToFolder, file.name);
        fs.stat(pathToFile, (err, stats) => {
          if (err) {
            return console.log(err);
          } else {
            return console.log(
              `${path.parse(pathToFile).name} - ${path
                .extname(file.name)
                .substring(1)} - ${(stats.size / 1024).toFixed(3)}kb`
            );
          }
        });
      }
    });
  }
});
