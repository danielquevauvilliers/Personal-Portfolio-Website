const landingPage = document.getElementById("landing-page");
const website = document.getElementById("website");

const showWebsite = function() {
  landingPage.style.display = "none";
  website.style.display = "block";
}

document.getElementById("landing-page-button").addEventListener("click", showWebsite);