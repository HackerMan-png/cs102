function loading() {
    alert("You know who to vote for")
}

function nixonClick(){
    congratulations.style.display = "block"
    wrapper.style.display = "none"
    congratulations.setAttribute("loop", "")
    congratulations.play()
}

function nixonMouseHover() {
    this.style.height = "55vh"
    this.style.width = "55vw"
    mcgovernButton.style.width = "40vw"
}

function nixonMouseLeave() {
    this.style.height = "50vh"
    this.style.width = "49vw"
    mcgovernButton.style.width= "49vw"
}

function mcgovernMouseHover() {
    this.style.height = "55vh"
    this.style.width = "60vw"
    nixonButton.style.width = "40vw"
}

function mcgovernMouseLeave() {
    this.style.background = "rgb(8, 0, 121)"
    this.style.height = "50vh"
    this.style.width = "49vw"
    nixonButton.style.width = "49vw"
}

function mcgovernClick() {
    this.style.height = "5vh"
    this.style.width = "7vw"
    this.style.fontSize = "1rem"
    this.removeEventListener("mouseenter", mcgovernMouseHover)
    this.removeEventListener("mouseleave", mcgovernMouseLeave)
    this.addEventListener("mouseenter", mcgovernClickedHover)
    nixonButton.removeEventListener("mouseenter", nixonMouseHover)
    nixonButton.removeEventListener("mouseleave", nixonMouseLeave)
}

function mcgovernClickedHover() {
    this.style.position = "absolute"
    let buttonHeight = Number(nixonButton.clientHeight)
    let buttonWidth = Number(nixonButton.clientWidth)
    nixonButton.style.width = "49vw"

    this.style.top = buttonHeight / 2 + "px"
    this.style.left = buttonWidth / 2 + "px"
    this.width = "7vw"

    this.removeEventListener("click", mcgovernClick)
    this.removeEventListener("mouseenter", mcgovernClickedHover)
    this.addEventListener("click", mcgovernTrickClick)
}

function makeButton() {
    let button = document.createElement("button")
    button.textContent = `Nixon`
    button.style.height = "150px"
    button.style.width = "300px"
    button.style.fontSize = "3rem"
    button.style.backgroundColor = "rgb(121, 0, 0)"
    button.style.color = "white"
    button.addEventListener("click", nixonClick)
    wrapper.appendChild(button)

}

let clicks = 0
function mcgovernTrickClick() {
    console.log(window.innerHeight)
    console.log(event.clientY + 100 + nixonButton.style.top);
    let randomNumberY = Math.floor(Math.random() * 100000)
    let randomNumberX = Math.floor(Math.random() * 100000)
    clicks++
    if (window.innerHeight < (event.clientY + randomNumberY + nixonButton.style.top)) {

        this.style.top = ((event.clientY + randomNumberY + nixonButton.style.top) % window.innerHeight) + 'px';
    } else {
        this.style.top = event.clientY + randomNumberY + 'px'
    }

    if (window.innerWidth < (event.clientX + randomNumberX + nixonButton.style.left)) {

        this.style.left = ((event.clientX + randomNumberX + nixonButton.style.left) % window.innerWidth) + 'px';
    } else {
        this.style.left = event.clientX + randomNumberX + 'px'
    }
    if (clicks >= 5) {
        this.style.display = "none"
        nixonButton.style.display = "none"
        wrapper.style.alignItems = "flex-start"
        wrapper.style.justifyContent = "start"
        body.style.alignItems = "flex-start"
        body.style.alignItems = "start"
        for(let i = 0; i < 100; i++){
            setTimeout(makeButton, i * 40)
        }



        console.log(clicks);
    }
}

nixonButton.addEventListener("mouseenter", nixonMouseHover)
nixonButton.addEventListener("mouseleave", nixonMouseLeave)

mcgovernButton.addEventListener("mouseenter", mcgovernMouseHover)
mcgovernButton.addEventListener("mouseleave", mcgovernMouseLeave)


mcgovernButton.addEventListener("click", mcgovernClick)

nixonButton.addEventListener("click", nixonClick)

window.addEventListener("load", e => {
    alert("You know who to vote")
})

document.addEventListener("contextmenu", e => {
    alert("no")
    e.preventDefault
})
