const genContentHTML = content => {
  const contentHTML = [`<div class="events">`];
  console.log(`Found ${content.length} items to process.`);
  console.log("Generated HTML:");
  contentHTML.push("</div>");
  console.log(contentHTML.join("\n"));
};
module.exports = genContentHTML;
