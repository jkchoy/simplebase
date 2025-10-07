// document content loaded
document.addEventListener('DOMContentLoaded', () => {

  // GLOBAL FUNCTIONS GO HERE




  // ENABLE MOBILE MENU

  const sitenav = document.querySelector(".site-nav");
  const menubutton = document.querySelector(".menubutton");

  menubutton.onclick = () => {

    // IF MENU IS CLOSED, OPEN IT, ELSE CLOSE IT
    if (sitenav.getAttribute("data-menustate") === "open") {
      sitenav.setAttribute("data-menustate", "closed");
    } else {
      sitenav.setAttribute("data-menustate", "open");
    };

  };

  // USING window.onresize REMOVE THE DATA-ATTRIBUTE ON RESIZE
  window.onresize = () => {
    sitenav.removeAttribute("data-menustate");

  };


});