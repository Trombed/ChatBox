let menu = document.getElementById('help')
let readme = document.getElementById('readme')
let close = document.getElementById('close')
let exitButton = document.getElementById("exit_button")



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

