const header = document.getElementById("header");
const navBar = document.getElementById("navigation");
const contentSection = document.getElementById("content");

const renderHomePage = () => {
  header.innerText = "This is our header";
  navBar.innerHTML = "<a href='google.com'>Google</a>";
  contentSection.innerHTML = "<p>This is our homepage content</p>";
};

renderHomePage();
