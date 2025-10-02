// document content loaded
document.addEventListener('DOMContentLoaded', () => {

  // GLOBAL FUNCTIONS GO HERE




  // ENABLE MOBILE MENU

  const sitenav = document.querySelector(".site-nav");
  const menubutton = document.querySelector(".menubutton");

  menubutton.onclick = () => {

    // IF MENU IS CLOSED, OPEN IT, ELSE CLOSE IT
    if (sitenav.getAttribute("data-menustate") === "closed") {
      sitenav.setAttribute("data-menustate", "open");
    } else {
      sitenav.setAttribute("data-menustate", "closed");
    };

  };



});