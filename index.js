const fs = require("fs");
// Read the configuration.
const content = require("./content.json");
// Welcome message.
console.log("Running Static Site Generator.");
// Create a directory if it doesn't exist.
const dir = __dirname + "/build";
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}
console.log("Here's the content:");
console.log(content);
