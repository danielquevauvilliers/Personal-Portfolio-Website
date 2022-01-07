
// Interactivity of landing page button
const landingPage = document.getElementById("landing-page");
const website = document.getElementById("website");

function showWebsite() {
  landingPage.style.display = "none";
  website.style.display = "flex";
}

document.getElementById("landing-page-button").addEventListener("click", showWebsite);


// Interactivity of project paragraphs
const projectSwitches = document.querySelectorAll(".project-switch");

window.onload = function() {
  for (let i=0, iLen=projectSwitches.length; i < iLen; i++) {
    projectSwitches[i].nextElementSibling.style.display = "none";
  }
}

for (let i=0, iLen=projectSwitches.length; i < iLen; i++) {
  projectSwitches[i].onclick = function() {
    const spanChild = this.firstElementChild;
    if (spanChild.innerHTML === "▽") {
      spanChild.innerHTML = "▷";
    } else {
      spanChild.innerHTML = "▽";
    };

    const element = this.nextElementSibling;
    if (element.style.display === "none") {
      element.style.display = "flex";
    } else {
      element.style.display = "none"
    }
  }
}


