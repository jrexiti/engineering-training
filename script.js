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

loadModal();
closeModal();

function createUl(list1, list2) {
  return new Promise((resolve) => {
    let response = "";
    for (let i = 0; i < list1.length; i++) {
      let link = list1[i],
        title = list2[i],
        jlink,
        jtitle;

      const jiraObject = {
        link,
        title,
      };
      jlink = jiraObject.link;
      jtitle = jiraObject.title;
      console.log(jlink, jtitle);

      response += `<li class="bi bi-check-circle-fill"/li>
    <a href="${jlink}">${jtitle}</a>
    `;
    }
    resolve(response);
  });
}

function loadData(value) {
  setTimeout(() => {
    console.log("Data loaded");
    modalContainer.classList.toggle("hidden");
    createUl(jiraLinks, jiraTitles).then(function (response) {
      listElement.innerHTML = response;
    });
  }, value);
}

function loadModal() {
  buttonID.addEventListener("click", () => {
    hiddenModal.classList.toggle("hidden");

    loadData(1000);
  });
}

function closeModal() {
  closeModalButton[0].addEventListener("click", () => {
    modalContainer.classList.toggle("hidden");
  });
}
