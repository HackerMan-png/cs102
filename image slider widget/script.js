$(function () {



	let interval;

	// function startImages(){
	//     interval = setInterval(function(){
	//         let newImg = document.createElement("img")
	//         newImg.src ="dv4iaP0.png"
	//         newImg.addEventListener("click", function(){
	//             toggleImages()
	//         })
	//         body.append(newImg)
	//     })
	// }

	// let running = true
	// function toggleImages(){

	//     if (running == true){
	//         running = false
	//         clearInterval(interval)
	//     }else{
	//         running = true
	//         startImages()
	//     }
	// }

	// startImages()
	// settings for the slider
	let width = 720;
	let animationSpeed = 2000;
	let pause = 2500 // 2000 + 500 delay

	//cache DOM elements
	let $slideContainer = $(`.slides`)
	let $slides = $(`.slide`)
	let $body = $(`.background`)

	let interval
	let currentSlide = 1

	//create a function that will start the slider
	function startSlider() {
		interval = setInterval(function () {

			//animating the slide container will cause the action in the function to happen every delay
			$slideContainer.animate({ 'margin-left': '-=' + width },
				animationSpeed,
				function () {
					currentSlide++
					if (currentSlide == $slides.length) {
						currentSlide = 1
						$slideContainer.css('margin-left', 0)
					}
				})
		}, pause)
	}

	function pauseSlider() {
		clearInterval(interval)
	}

	startSlider()
	// setInterval(function(){
	//     let randomColor = Math.floor(Math.random()*16777215).toString(16)
	//     $body.css ('background-color', "#" + randomColor)
	//     console.log(randomColor);

}, 3000)
$slideContainer
	.on(`mouseenter`, pauseSlider)
	.on(`mouseleave`, startSlider)

