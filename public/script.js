let menu = document.getElementById('help')
let readme = document.getElementById('readme')
let close = document.getElementById('close')
let exitButton = document.getElementById("exit_button")
let getStarted = document.getElementById("get_started_button")
let landing = document.getElementById('landing')
let wrapper = document.getElementById('wrapper')

menu.onclick = function() {
  if (readme.style.display === "none" || readme.style.display === "") {
    readme.style.display = "block"
  } else {
    readme.style.display = 'none'
  }

}

document.addEventListener ('keyup', (e) => {
  if (e.key === "Escape") {
   readme.style.display = "none"
  } 
})

close.onclick = function() {
  readme.style.display = "none"
}

exitButton.onclick = function() {
  readme.style.display = "none"

}
// getStarted.onclick = function() {
//   // landing.classList.add("slide-out")
//   // landing.style.display = "none"
//   // wrapper.style.display = "block"


// }


$('#get_started_button').click( () => {
  
  $('html, body').animate({
    scrollTop: $('#wrapper')

}, 1500, function () {
  $('#landing').hide()
});
})