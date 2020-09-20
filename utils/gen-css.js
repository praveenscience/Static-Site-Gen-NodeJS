const genCSS = () => `
      * {margin: 0; padding: 0; list-style: none; line-height: 1; font-weight: normal; text-decoration: none; font-size: 10pt; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box;}
      body {background-color: #fff; padding: 15px;}

      /* Container */
      .events {overflow: hidden;}
      /* Item Container */
      .events .event-item {float: left; width: 20%; text-align: center; padding: 5px;}
      /* Figure Area */
      .events .event-item figure {display: block; border: 2px solid #e0e0e0; padding: 20px 15px; border-radius: 10px;}
      .events .event-item figure a {display: block;}
      .events .event-item figure a img {max-width: 100%; display: block; border-radius: 5px; -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.25); -moz-box-shadow: 0 0 5px rgba(0, 0, 0, 0.25); box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);}
      /* Item Text Content */
      .events .event-item h3 a {display: block; text-overflow: ellipsis; white-space: nowrap; overflow: hidden; padding: 5px;}
      .events .event-item p {min-height: 75px;}

      .events .event-item figure {
        /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#f5f5f5+0,eeeeee+100 */
        background: #f5f5f5; /* Old browsers */
        background: -moz-linear-gradient(top,  #f5f5f5 0%, #eeeeee 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(top,  #f5f5f5 0%,#eeeeee 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to bottom,  #f5f5f5 0%,#eeeeee 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f5f5f5', endColorstr='#eeeeee',GradientType=0 ); /* IE6-9 */
      }

      /* Responsiveness */
      @media screen and (max-width: 1800px) {
        .events .event-item {width: 25%;}
      }
      @media screen and (max-width: 1368px) {
        .events .event-item {width: 33%;}
      }
      @media screen and (max-width: 768px) {
        .events .event-item {width: 50%;}
      }
      @media screen and (max-width: 425px) {
        .events .event-item {width: 100%;}
        .events .event-item p {min-height: 0;}
      }
    `;
module.exports = genCSS;
