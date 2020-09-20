const fs = require("fs");
// Read the configuration.
const content = require("./content.json");
const genContentHTML = require("./utils/gen-content");
// Welcome message.
console.log("Running Static Site Generator.");
// Create a directory if it doesn't exist.
const dir = __dirname + "/build";
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}
console.log("Generating HTMLs from the content.");
genContentHTML(content);
