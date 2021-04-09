let string = "race car"

let splitString = string.split("")

let reversed = ""

for(i = splitString.length - 1; i >= 0; i--){
	reversed += splitString[i]
}

if(string == reversed){
	console.log(`${string} is a palindrome!`)
}else{
	console.log(`${string} is not a palindrome`)
}