window.addEventListener('DOMContentLoaded', () => {
   const body = document.querySelector('body');
   body.childNodes.forEach(node => {
      console.log(node);
   });
});


//*[@id="post-content-body"]/div[1]/div/div/pre[1]/code