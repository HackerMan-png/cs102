// toggleButton.addEventListener("click", function(){
//     if(text.style.visibility != "hidden"){
//         text.style.visibility = "hidden"
//     }else{
//         text.style.visibility = "visible"
//     }
// })
function red() {
    this.style.background = "red"
}

function white() {
    this.style.background = "white"
}
function green() {
    this.style.background = `green`
    this.removeEventListener("mouseenter", red)
    this.removeEventListener("mouseleave", white)

}

for (let i = 1; i <= 49; i++) {
    let divs = document.createElement("div")

    divs.addEventListener("mouseenter", red)
    divs.addEventListener("mouseleave", white)
    divs.addEventListener("click", green)
    body.appendChild(divs)
}