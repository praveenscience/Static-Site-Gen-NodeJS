const genCSS = require("./gen-css");
const Header = `<!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Events with Praveen</title>
    <style>${genCSS()}</style>
  </head>
  <body>
`;
const Footer = `
  </body>
</html>`;
module.exports = {
  Header,
  Footer
};
