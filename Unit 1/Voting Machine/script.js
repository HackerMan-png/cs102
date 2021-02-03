function nixonMouseHover() {
    this.style.height = "55vh"
    this.style.width = "55vw"
}

function nixonMouseLeave() {
    this.style.height = "50vh"
    this.style.width = "49vw"
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
}

function mcgovernClickedHover() {
    this.style.position = "absolute"
    let buttonHeight = Number(nixonButton.clientHeight)
    let buttonWidth = Number(nixonButton.clientWidth)
    nixonButton.style.width = "49vw"

    this.style.top = buttonHeight / 2 + "px"
    this.style.left = buttonWidth / 2 + "px"

    nixonButton.removeEventListener("mouseenter", nixonMouseHover)
    nixonButton.removeEventListener("mouseleave", nixonMouseLeave)
    this.removeEventListener("click", mcgovernClick)
    this.removeEventListener("mouseenter", mcgovernClickedHover)
    this.addEventListener("click", mcgovernTrickClick)
}

function mcgovernTrickClick() {
    console.log(window.innerHeight)
    console.log(event.clientY + 100 + nixonButton.style.top);
    
    
    if(window.innerHeight < (event.clientY + 100 + nixonButton.style.top)){

        this.style.top = ((event.clientY + 100 + nixonButton.style.top) % window.innerHeight) + 'px';
    }else{
        this.style.top = event.clientY + 100 + 'px'
    }
    
}

nixonButton.addEventListener("mouseenter", nixonMouseHover)
nixonButton.addEventListener("mouseleave", nixonMouseLeave)

mcgovernButton.addEventListener("mouseenter", mcgovernMouseHover)
mcgovernButton.addEventListener("mouseleave", mcgovernMouseLeave)


mcgovernButton.addEventListener("click", mcgovernClick)