const fsPromises = require("fs/promises");
const path = require("path");
const pathToFolder = path.join(__dirname, "files");
const pathToCopyFolder = path.join(__dirname, "files-copy");

fsPromises.rm(pathToCopyFolder, { recursive: true, force: true }).then(() => {
  fsPromises
    .mkdir(pathToCopyFolder, { recursive: true })
    .then(() => copyFolder())
    .catch((err) => console.log(err));
});

function copyFolder() {
  fsPromises.readdir(pathToFolder).then((files) => {
    files.forEach((file) => {
      fsPromises
        .copyFile(
          path.join(pathToFolder, file),
          path.join(pathToCopyFolder, file)
        )
        .catch((err) => console.log(err));
    });
  });
}
