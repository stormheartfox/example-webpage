const paragraphWithId = document.getElementById("first-paragraph");
const clickButton = document.getElementById("first-button");
const clickButton2 = document.getElementById("another-button");
const clickADiv = document.getElementById("myClickableDiv");

const changeItBack = () => {
  paragraphWithId.innerText =
    "Tom's mother is a fine cook and hopefully she makes us a really nice pie one day";
};
const changeParagraph = () => {
  paragraphWithId.innerText = "You clicked this button";
};
const divFunction = () => {
  paragraphWithId.innerHTML = "You clicked a div";
};
clickADiv.addEventListener("click", divFunction);
clickButton.addEventListener("click", changeParagraph);
clickButton2.addEventListener("click", changeItBack);
