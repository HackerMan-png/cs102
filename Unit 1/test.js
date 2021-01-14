let student = {}

function createStudent(name, id, hairColor, favoriteSnack, class, sessionTime, height) {
	return {
		name: name,
		id: id,
		hairColor: hairColor,
		favoriteSnack: favoriteSnack,
		class: class,
		sessionTime: sessionTime,
		height: height,
	}
}

let jaxson = createStudent("Jaxson H.", 1098800, "Black", "Chips", "Coding", "1:00", "5' 10\"")


let user = {}

let userName = prompt("What is your name?", "last, first")
let userFavColor = prompt("What is your favorite color?", "Ex: Blue")
let userRandomNumber = prompt("Enter a random number", "Ex: 69")

user["name"] = userName
user["favColor"] = userFavColor
user["randomNumber"] = userRandomNumber

console.log(user)