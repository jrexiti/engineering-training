console.log("Engineering Training!")



var buttonID = document.getElementById('modalButton')
var hiddenModal = document.getElementById('modalContainer')
console.log("modalButton " , buttonID.outerHTML)

buttonID.addEventListener('click', function(){
       console.log("button clicked!")
       hiddenModal.classList.toggle("hidden")
})









