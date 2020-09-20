const fs = require("fs");
// Read the configuration.
const content = require("./content.json");
const genContentHTML = require("./utils/gen-content");
const { Header, Footer } = require("./utils/gen-skel");
// Welcome message.
console.log("Running Static Site Generator.");
// Create a directory if it doesn't exist.
const dir = __dirname + "/build";
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

const finalContent = [];
console.log("Generating the header.");
finalContent.push(Header);
console.log("Generating HTMLs from the content.");
finalContent.push(genContentHTML(content));
console.log("Generating the footer.");
finalContent.push(Footer);
console.log("Writing final HTML file.");
fs.writeFileSync(__dirname + "/build/index.html", finalContent.join("\n"));
console.log("Writing final HTML file done.");
