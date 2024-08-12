const header = document.getElementById("header");
const homeNav = document.getElementById("homeNav");
const infoNav = document.getElementById("infoNav");
const interestsNav = document.getElementById("interestsNav");
const contentSection = document.getElementById("content");
const pageHeader = document.getElementById("pageHeader");
const footer = document.getElementById("footer");

homeNav.addEventListener("click", renderHomePage);
infoNav.addEventListener("click", renderInfo);
interestsNav.addEventListener("click", renderInterests);
header.innerHTML = "<h1>Tom's Website</h1>";
footer.innerHTML = "This page was made by Tom & Michael";
function renderHomePage() {
  contentSection.innerHTML = "<p>This is our homepage content</p>";
  pageHeader.innerHTML = "<h2>Homepage Article Header</h2>";
}
function renderInfo() {
  pageHeader.innerHTML = "<h2>Info Article Header</h2>";
  contentSection.innerHTML = `
        <p>
          Famous quotes include "parmesan and mozzarella are good but they don't
          get anywhere near most kinds of French cheese."
        </p>
        <p>This is our second paragraph</p>
      `;
}
function renderInterests() {
  pageHeader.innerHTML = "<h2>Interests Article Header</h2>";
  contentSection.innerHTML = `
      <p>
        Tom describes himself as a sporty person and enjoys football, climbing
        and cycling
      </p>
    `;
}
renderHomePage();
