

// $(function () {
// 	// 	$("#panel1").hide(3000).show(2000)
// 	// 	$("#panel2").fadeTo(1000, 0).fadeTo(2000, 0.8)
// 	// 	$("#panel3").slideUp(1000).delay(1000).slideDown(1500)
// 	// 	$("#panel4").fadeTo(1000, 0.3).slideUp(2000).fadeTo(1000, 0).slideDown(2000).fadeTo(2000, 1)

// 	$('#panel1').css({
// 		'color': 'white',
// 		'background-color': 'blue',
// 	})
// 	$('#panel1-body').html("The background is blue and the text is white")

// 	$('#panel2').css({
// 		'color': 'white',
// 		'background-color': 'green',
// 		'font-weight': 'bold',
// 	})
// 	$('#panel2-body').html("The background is green and the text is white and the font is bold")

// 	$('#panel3').css({
// 		'color': 'black',
// 		'background-color': 'darkgrey',
// 		'font-family': 'monospace',
// 	})
// 	$('#panel3-body').css({
// 		'font-family': 'monospace'
// 	})
// 	$('#panel3-body').html("The background is darkgey and the text is black and the font family is monospace, including the panel content.")

// 	$('#panel4').css({
// 		'color': 'black',
// 		'background-color': 'white',
// 	})
// 	$('#panel4-heading').css({
// 		'color': 'white',
// 		'background-color': 'blue',
// 		'text-decoration-line': 'underline',
// 		'font-weight': 'bold',
// 	})
// 	$('#panel4-body').css({
// 		'background-color': "maroon",
// 		'color': "white",
// 		'font-family': "serif"
// 	})
// 	$('#panel4-body').html("The panel is white with black text, the heading is blue with white text and underlined with bold text, the content is red with white text and serif font")
	

// 	$('#button1').on('click', function(){
// 		$('#panel1').fadeToggle(1000)
// 	})

// 	$('#button2').on('click', function(){
// 		$('#panel2').hide(1000).delay(Math.floor(Math.random() * 6000)).show(1000)
// 	})
// })
// 	$('#button1').on('click', function(){
// 		$('#panel1').fadeToggle(1000)
// 		$('#panel4').fadeToggle(1000)
// 	})
// 	$('#button2').on('click', function(){
// 		$('#panel2').fadeToggle(1000)
// 		$('#panel3').fadeToggle(1000)
// 		$('#panel4').fadeToggle(1000)
// 	})
// 	$('#button3').on('click', function(){
// 		$('#panel1').fadeToggle(1000)
// 		$('#panel3').fadeToggle(1000)
// 	})
// 	$('#button4').on('click', function(){
// 		$('#panel1').fadeToggle(1000)
// 		$('#panel2').fadeToggle(1000)
// 	})
// })

$('li').on('click', function(){
	$('.highlight').removeClass('highlight')
	$(this).addClass('highlight');
});