const fs = require("fs");
// Welcome message.
console.log("Running Static Site Generator.");
// Create a directory if it doesn't exist.
const dir = __dirname + "/build";
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}
