console.log("Engineering Training!")



var buttonID = document.getElementById('modalButton')
var hiddenModal = document.getElementById('modalContainer')
var closeModalButton = document.getElementsByClassName('close-modal-button')
var modalContainer = document.getElementById('modalContainer')

console.log("modalButton " , buttonID.outerHTML)
buttonID.addEventListener('click', function(){
       console.log("Open modal button clicked!")
       hiddenModal.classList.toggle("hidden")
       
})
console.log("close-modal-button", closeModalButton)

closeModalButton[0].addEventListener('click', function(){
       console.log("Clicked close modal button!")
       modalContainer.classList.toggle('hidden')



})









