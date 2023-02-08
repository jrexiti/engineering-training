console.log("Engineering Training!")


var buttonID = document.getElementById('modalButton')
var hiddenModal = document.getElementById('modalContainer')
var closeModalButton = document.getElementsByClassName('close-modal-button')
var modalContainer = document.getElementById('modalContainer')
var jiraTitles = [
    'Create a public repository under your GitHub account',
    'Create a new script file, and import it into index.html and add a console log',
    'JavaScript: Variables',
    'JavaScript: Event Listeners - Add Toggle Button Inside of Modal',
    'JavaScript: Functions - Write a function to toggle hidden class on modal'
]
var jiraLinks = [
    'https://totalwine.atlassian.net/browse/TT-2',
    'https://totalwine.atlassian.net/browse/TT-16',
    'https://totalwine.atlassian.net/browse/TT-17',
    'https://totalwine.atlassian.net/browse/TT-18',
    'https://totalwine.atlassian.net/browse/TT-19'
]

console.log("modalButton ", buttonID.outerHTML)
buttonID.addEventListener('click', function () {
    console.log("Open modal button clicked!")
    hiddenModal.classList.toggle("hidden")
})
console.log("close-modal-button", closeModalButton)
closeModalButton[0].addEventListener('click', function () {
    console.log("Clicked close modal button!")
    modalContainer.classList.toggle('hidden')
})
console.log('jiraTitles', jiraTitles)
console.log('jiraLinks', jiraLinks)

loop(jiraLinks)
loop(jiraTitles)




//Custom array iterator
function loop(list){
    for (let i = 0; i< list.length; i++){
        console.log(list[i])
    }
}

//Arrays for each iterator.
jiraLinks.forEach(link =>{console.log(link)})
jiraTitles.forEach(title =>{console.log(title)})











