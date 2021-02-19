function nixonMakeBig() {
    this.style.height = "55vh"
    this.style.width = "55vw"
}
function nixonMakeSmoll() {
    this.style.background = "rgb(121, 0, 0)"
    this.style.height = "50vh"
    this.style.width = "49vw"
}

function mcgovernMakeBig() {
    this.style.height = "55vh"
    this.style.width = "60vw"
    nixonButton.style.width = "40vw"
}

function mcgovernMakeSmoll() {
    this.style.background = "rgb(8, 0, 121)"
    this.style.height = "50vh"
    this.style.width = "49vw"
    nixonButton.style.width = "49vw"
}

function mcgovernClickedHover(){
    let newTop = nixonButton.style.top
    let newLeft = nixonButton.style.left

    console.log(newTop)
    console.log(newLeft)

    this.style.top = `${newTop}px`
    this.style.left = `${newLeft}px`
}

function mcgovernClick() {
    this.style.height = "5vh"
    this.style.width = "10vw"
    this.style.fontSize = "1rem"
    this.removeEventListener("mouseleave", mcgovernMakeSmoll)
    this.removeEventListener("mouseenter", mcgovernMakeBig)
    this.addEventListener("mouseenter", mcgovernClickedHover)
}

nixonButton.addEventListener("mouseenter", nixonMakeBig)
nixonButton.addEventListener("mouseleave", nixonMakeSmoll)

mcgovernButton.addEventListener("mouseenter", mcgovernMakeBig)
mcgovernButton.addEventListener("mouseleave", mcgovernMakeSmoll)


mcgovernButton.addEventListener("click", mcgovernClick)
