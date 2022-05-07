var page = require('webpage').create();

page.viewportSize = {
   width: 1920,
   height: 1080
};

page.open('https://freyamebel.com/', function(status) {
   setTimeout(function() {
     console.log("Status: " + status);
  if(status === "success") {
    page.render('3212212213555551.png');
  }
  phantom.exit();
   }, 1900);
});