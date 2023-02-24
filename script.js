console.log("Engineering Training!");

var listElement = document.querySelector(".grid-container");
var buttonID = document.getElementById("modalButton");
var hiddenModal = document.getElementById("modalContainer");
var closeModalButton = document.getElementsByClassName("close-modal-button");
var modalContainer = document.getElementById("modalContainer");

var jiraTitles = [
  "Create a public repository under your GitHub account",
  "Create a new script file, and import it into index.html and add a console log",
  "JavaScript: Variables",
  "JavaScript: Event Listeners - Add Toggle Button Inside of Modal",
  "JavaScript: Functions - Write a function to toggle hidden class on modal",
];

var jiraLinks = [
  "https://totalwine.atlassian.net/browse/TT-2",
  "https://totalwine.atlassian.net/browse/TT-16",
  "https://totalwine.atlassian.net/browse/TT-17",
  "https://totalwine.atlassian.net/browse/TT-18",
  "https://totalwine.atlassian.net/browse/TT-19",
];

// console.log("modalButton ", buttonID.outerHTML);
// buttonID.addEventListener("click", function () {
//   console.log("Open modal button clicked!");
//   hiddenModal.classList.toggle("hidden");
// });
// console.log("close-modal-button", closeModalButton);
// closeModalButton[0].addEventListener("click", function () {
//   console.log("Clicked close modal button!");
//   modalContainer.classList.toggle("hidden");
// });
// console.log("jiraTitles", jiraTitles);
// console.log("jiraLinks", jiraLinks);

loop(jiraLinks);
loop(jiraTitles);
addToArr(jiraLinks, jiraTitles);
createUl(jiraLinks, jiraTitles);

function loop(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
  }
}

function aLoop(list1, list2) {
  for (let i = 0; i < list1.length; i++) {
    let link = list1[i],
      title = list2[i];
    const jiraObject = {
      link,
      title,
    };
    console.log("jiraObjects", jiraObject);
  }
}

function addToArr(list1, list2) {
  let arr = [];
  for (let i = 0; i < list1.length; i++) {
    let link = list1[i],
      title = list2[i];

    const jiraObject = {
      link,
      title,
    };
    arr.push(jiraObject);
    console.log(i, arr[i]);
  }
}

function createUl(list1, list2) {
  for (let i = 0; i < list1.length; i++) {
    let link = list1[i],
      title = list2[i],
      combo = [],
      listItem;
    combo.push(title, link);

    console.log(combo);

    listItem = document.createElement("li");
    listElement.prepend(listItem);
    listItem.innerHTML = `title${title}, link${link}`;
    listElement.appendChild(listItem);
  }
}
