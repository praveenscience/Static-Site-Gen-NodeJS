const genItemHTML = require("./gen-item");

const genContentHTML = content => {
  const contentHTML = [`<ul class="events">`];
  console.log(`Found ${content.length} items to process.`);
  const contentsArray = [...content].map(genItemHTML);
  contentHTML.push("\t" + contentsArray.join("\n\t"));
  console.log("Generated HTML:");
  contentHTML.push("</ul>");
  return contentHTML.join("\n");
};
module.exports = genContentHTML;
