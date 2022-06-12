var allLinks = [];
for (var link of document.querySelectorAll(`[class*="item_"] > a, [class*="item_"] span:first-child`)) {
   allLinks.push({'title': link.text, 'href': new URL (link.getAttribute('href'), 'https://www332').href });
}

// textContent


window.addEventListener('DOMContentLoaded', () => {
   const body = document.querySelector(`[class*="item_"] > a`);
   body.childNodes.forEach(node => {
      console.log(node);
   });
});


//----------------------------------------------------------------------
// document.querySelectorAll(`[class*="item_"] span > span:first-child`)
// document.querySelectorAll(`[class*="item_"] span > span:nth-child(2)`)
//------------------------------------------------------------------------

// for (var link of document.querySelectorAll(`[class*="item_"] > a`)) {
//    allLinks.push({'title': link.text});
//    allLinks.push({'href': new URL (link.getAttribute('href'), 'https://www332').href });
// }

// for (var link of document.querySelectorAll(`[class*="item_"] > a, [class*="item_"] span:first-child`)) {
//    all3.push({'title': link.text, 'textContent': link.textContent, 'href': new URL (link.getAttribute('href'), 'https://www332').href });
// }

var allLinks = [];
for (var link of document.querySelectorAll(`[class*="item_"] > a, [class*="item_"] span:first-child`)) {
   hrefLinks.push({'title': link.text, 'href': new URL (link.getAttribute('href'), 'https://www332').href });
   textLinks.push({'textContent': link.textContent});

}