"use strict";


// ******************


// document.getElementById("click").onclick(()=>{
//   document.getElementById("back").style.display="block";
// })



// ******************
// Page loading
var pageLoading = document.querySelector(".page-loading");

if (pageLoading) {
  window.addEventListener("load", () => {
    pageLoading.classList.add("hide");

    setTimeout(() => {
      pageLoading.style.display = "none";
    }, 1000);
  });
}

// Navbar
const navbar = document.querySelector(".ic-navbar"),
  navbarToggler = navbar.querySelector("[data-web-toggle=navbar-collapse]");

navbarToggler.addEventListener("click", function () {
  const dataTarget = this.dataset.webTarget,
    targetElement = document.getElementById(dataTarget),
    isExpanded = this.ariaExpanded === "true";

  if (!targetElement) {
    return;
  }

  navbar.classList.toggle("menu-show");
  this.ariaExpanded = !isExpanded;
  navbarToggler.innerHTML = navbar.classList.contains("menu-show")
    ? '<i class="lni lni-close"></i>'
    : '<i class="lni lni-menu"></i>';
});

// *************
var isBack=false 
var iframeId
window.addEventListener("load", () => {
  const x = document.querySelectorAll(".click5");
  x.forEach((e) => {
    e.onclick = () => {
      iframeId=e.getAttribute('data')
      console.log(`iframe${iframeId}`);
      
      document.getElementById(`iframe${iframeId}`).style.display='block'
      document.getElementById("back").style.display="block";
      document.body.style.overflow="hidden";
      navbar.classList.remove("sticky");
      isBack=true
      // document.getElementById('iframe').src=link
    };
    // console.log(e)
  });
});

// document.getElementById("click2").onclick = function(){
//   console.log("here2")
// }

// document.getElementById("click").onclick = function(){
//   // 
//   document.getElementById("back").style.display="block";
//   document.body.style.overflow="hidden";
//   navbar.classList.remove("sticky");
//   isBack=true
//   console.log("here")
// }
document.getElementById("x").onclick = function(){
  document.getElementById("back").style.display="none";
  document.body.style.overflow="scroll";
  navbar.classList.add("sticky");
  const iframe=document.getElementById(`iframe${iframeId}`)
  iframe.src = iframe.src;
  document.getElementById(`iframe${iframeId}`).style.display='none'
  isBack=false
}
// *************
// Sticky navbar
window.addEventListener("scroll", function () {
  if(!isBack){
    if (this.scrollY >= 72) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
  }
});

// Web theme
const webTheme = document.querySelector("[data-web-trigger=web-theme]"),
  html = document.querySelector("html");

window.addEventListener("load", function () {
  var theme = localStorage.getItem("Inazuma_WebTheme");

  if (theme == "light") {
    webTheme.innerHTML = '<i class="lni lni-sun"></i>';
  } else if (theme == "dark") {
    webTheme.innerHTML = '<i class="lni lni-night"></i>';
  } else {
    theme = "light";
    localStorage.setItem("Inazuma_WebTheme", theme);
    webTheme.innerHTML = '<i class="lni lni-night"></i>';
  }

  html.dataset.webTheme = theme;
});

webTheme.addEventListener("click", function () {
  var theme = localStorage.getItem("Inazuma_WebTheme");

  webTheme.innerHTML =
    theme == "dark"
      ? '<i class="lni lni-sun"></i>'
      : '<i class="lni lni-night"></i>';
  theme = theme == "dark" ? "light" : "dark";
  localStorage.setItem("Inazuma_WebTheme", theme);
  html.dataset.webTheme = theme;
});

// Scrollspy
function scrollspy(event) {
  var links = document.querySelectorAll(".ic-page-scroll"),
    scrollpos =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;

  for (let i = 0; i < links.length; i++) {
    var currentLink = links[i],
      dataTarget = currentLink.getAttribute("href"),
      targetElement = document.querySelector(dataTarget),
      topminus = scrollpos + 74;

    if (targetElement) {
      if (
        targetElement.offsetTop <= topminus &&
        targetElement.offsetTop + targetElement.offsetHeight > topminus
      ) {
        document.querySelector(".ic-page-scroll").classList.remove("active");
        currentLink.classList.add("active");
      } else {
        currentLink.classList.remove("active");
      }
    }
  }
}

window.document.addEventListener("scroll", scrollspy);

// Menu scroll
const pageLink = document.querySelectorAll(".ic-page-scroll");

pageLink.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetElement = document.querySelector(link.getAttribute("href"));

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        offsetTop: 1 - 74,
      });
    }

    navbar.classList.remove("menu-show");
    navbarToggler.innerHTML = navbar.classList.contains("menu-show")
      ? '<i class="lni lni-close"></i>'
      : '<i class="lni lni-menu"></i>';
  });
});

// Tabs
const tabs = document.querySelectorAll(".tabs");

tabs.forEach((tab) => {
  const links = tab.querySelectorAll(".tabs-nav .tabs-link"),
    contents = tab.querySelectorAll(".tabs-content");

  if (!contents) {
    return;
  }

  window.addEventListener("load", function () {
    for (let i = 0; i < contents.length; i++) {
      contents[i].classList.add("hide");
    }

    for (let i = 0; i < links.length; i++) {
      links[i].classList.remove("active");
      links[i].ariaSelected = false;
    }

    links[0].classList.add("active");
    links[0].ariaSelected = true;

    const dataTarget = links[0].dataset.webTarget,
      targetElement = this.document.getElementById(dataTarget);

    targetElement.classList.remove("hide");
  });

  links.forEach((link) => {
    const dataTarget = link.dataset.webTarget,
      targetElement = document.getElementById(dataTarget);

    if (targetElement) {
      link.addEventListener("click", function () {
        for (let i = 0; i < contents.length; i++) {
          contents[i].classList.add("hide");
        }

        for (let i = 0; i < links.length; i++) {
          links[i].classList.remove("active");
          links[i].ariaSelected = false;
        }

        link.classList.add("active");
        link.ariaSelected = true;
        targetElement.classList.remove("hide");
      });
    } else {
      link.disabled = true;
    }
  });
});

// Portfolio filter
// ****************
document.querySelector('[data-filter="all"]').onclick=()=>{
    document.getElementById("des").style.display='none'
    document.getElementById("gra").style.display='none'
}
// document.querySelectorAll('nav button').forEach((e)=>{
//   e.onclick=()=>{
//     document.getElementById("des").style.display='none'
//     document.getElementById("gra").style.display='none'
//   }
// })
// document.getElementById("desktop").onclick=()=>{
//   document.getElementById("des").style.display='block'
// }
// document.getElementById("graphic").onclick=()=>{
//   document.getElementById("gra").style.display='block'
// }

// document.getElementById('currentLang').onclick=()=>{
//   if (localStorage.getItem('preferredLanguage')==='ar') {
//     document.getElementById('x').style.direction='rtl'
//     document.getElementById('ul').style.direction='rtl'
//   }
//   else if (localStorage.getItem('preferredLanguage')==='en') {
//     document.getElementById('x').style.direction='ltr'
//     document.getElementById('ul').style.direction='ltr'
//   }
  
// }

// ****************
const portfolioFilters = document.querySelectorAll(".portfolio-menu button");

portfolioFilters.forEach((filter) => {
  filter.addEventListener("click", function () {
    let btn = portfolioFilters[0];

    while (btn) {
      if (btn.tagName === "BUTTON") {
        btn.classList.remove("active");
      }

      btn = btn.nextSibling;
    }

    this.classList.add("active");

    let selected = filter.getAttribute("data-filter"),
      itemsToHide = document.querySelectorAll(
        '.portfolio-grid .portfolio :not([data-filter="' + selected + '"])'
      ),
      itemsToShow = document.querySelectorAll(
        '.portfolio-grid .portfolio [data-filter="' + selected + '"]'
      );

    if (selected == "all") {
      itemsToHide = [];
      itemsToShow = document.querySelectorAll(
        ".portfolio-grid .portfolio [data-filter]"
      );
    }

    itemsToHide.forEach((el) => {
      el.parentElement.classList.add("hide");
      el.parentElement.classList.remove("show");
    });

    itemsToShow.forEach((el) => {
      el.parentElement.classList.remove("hide");
      el.parentElement.classList.add("show");
    });
  });
});

// Scroll to top
var st = document.querySelector("[data-web-trigger=scroll-top]");

if (st) {
  window.onscroll = function () {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      st.classList.remove("is-hided");
    } else {
      st.classList.add("is-hided");
    }
  };

  st.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
