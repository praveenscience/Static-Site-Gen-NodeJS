/*
<div class="events">
  <div class="event-item">
    <figure><a href="#"><img src="https://i.imgur.com/Puhsv8j.png" alt="Interview Helper" /></a></figure>
    <h3><a href="">Interview Helper</a></h3>
    <p>Interview Helper description here...</p>
  </div>
  <div class="event-item">
    <figure><a href="#"><img src="https://i.imgur.com/gGdifNB.png" alt="Static Site Generator" /></a></figure>
    <h3><a href="">Static Site Generator</a></h3>
    <p>Static Site Generator description here...</p>
  </div>
  <div class="event-item">
    <figure><a href="#"><img src="https://i.imgur.com/pmDAUlk.png" alt="Getting a Career Opportunity in the UK" /></a></figure>
    <h3><a href="">Getting a Career Opportunity in the UK and get a job!</a></h3>
    <p>Getting a Career Opportunity in the UK description here...</p>
  </div>
  <div class="event-item">
    <figure><a href="#"><img src="https://i.imgur.com/Vse14TK.png" alt="Quick Shopping Cart Helper" /></a></figure>
    <h3><a href="">Quick Shopping Cart Helper</a></h3>
    <p>Quick Shopping Cart Helper description here...</p>
  </div>
  <div class="event-item">
    <figure><a href="#"><img src="https://i.imgur.com/Bfq4Q3Z.png" alt="Personal Portfolio Building Workshop" /></a></figure>
    <h3><a href="">Personal Portfolio Building Workshop</a></h3>
    <p>Personal Portfolio Building Workshop description here...</p>
  </div>
  <div class="event-item">
    <figure><a href="#"><img src="https://i.imgur.com/6SULPRT.png" alt="Code for Good" /></a></figure>
    <h3><a href="">Code for Good</a></h3>
    <p>Code for Good description here...</p>
  </div>
</div>
*/
const genContentHTML = content => {
  const contentHTML = [`<div class="events">`];
  console.log(`Found ${content.length} items to process.`);
  console.log("Generated HTML:");
  contentHTML.push("</div>");
  console.log(contentHTML.join("\n"));
};
module.exports = genContentHTML;
