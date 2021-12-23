
// Interactivity of landing page button
const landingPage = document.getElementById("landing-page");
const website = document.getElementById("website");

function showWebsite() {
  landingPage.style.display = "none";
  website.style.display = "block";
}

document.getElementById("landing-page-button").addEventListener("click", showWebsite);


// Interactivity of project paragraphs
const projectSwitches = document.querySelectorAll(".project-switch");

for (let i=0, iLen=projectSwitches.length; i < iLen; i++) {
  projectSwitches[i].onclick = function() {
    const element = this.nextElementSibling;
    if (element.style.display !== "none") {
      element.style.display = "none";
    } else {
      element.style.display = "flex"
    }
  }
}


