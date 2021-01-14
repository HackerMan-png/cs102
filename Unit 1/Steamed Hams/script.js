
function submit() {
	let inputName = document.getElementById("username").value
	let inputHairColor = document.getElementById("hairColor").value
	let inputHeight = document.getElementById("height").value
	let inputStudentID = document.getElementById("studentID").value
	let user = createObj(inputName, inputHairColor, inputHeight, inputStudentID)
	console.log(user)
}

function createObj(username, hairColor, height, studentID) {
	return {
		username: username,
		hairColor: hairColor,
		height: height,
		studentID: studentID
	}
}


