const fs = require("fs");
const path = require("path");
const { stdin, stdout, exit } = require("process");

const wstream = fs.createWriteStream(path.join(__dirname, "text.txt"));
stdout.write("Greetings. Enter your message...\n");
stdin.on("data", (data) => {
  if (data.includes("exit")) {
    stdout.write("\nGoodbye. I'll be back");
    exit();
  }
  wstream.write(data);
});

process.on("SIGINT", () => {
  stdout.write("\nGoodbye. I'll be back");
  exit();
});
