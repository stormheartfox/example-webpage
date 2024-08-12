const header = document.getElementById("header");
const navBar = document.getElementById("navigation");
const contentSection = document.getElementById("content");
function ourWebsite() {
  function navBarRender() {
    navBar.innerHTML = (
      <>
        <a onClick={renderHomePage}>Home</a>
        <a onClick={renderInfo}>Info</a>
        <a onClick={renderInterests}>Interests</a>
      </>
    );
  }
  function renderHomePage() {
    header.innerHTML = "<h1>This is our header</h1>";
    navBarRender();
    contentSection.innerHTML = "<p>This is our homepage content</p>";
  }
  function renderInfo() {
    header.innerHTML = "<h1>Tom's Info Page</h1>";
    navBarRender();
    contentSection.innerHTML = (
      <>
        <p>
          Famous quotes include "parmesan and mozzarella are good but they don't
          get anywhere near most kinds of French cheese."
        </p>
        <p>This is our second paragraph</p>
      </>
    );
  }
  function renderInterests() {
    header.innerHTML = "Tom's Interests";
    navBarRender();
    contentSection.innerHTML = (
      <p>
        Tom describes himself as a sporty person and enjoys football, climbing
        and cycling
      </p>
    );
  }
  renderHomePage();
}
ourWebsite();
