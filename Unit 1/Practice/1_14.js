// class Student {
// 	constructor(name, id, gradeLevel){
// 		this.name = name;
// 		this.id = id;
// 		this.gradeLevel = gradeLevel;
// 		this.permissions = "Student"
// 	}
// 	graduate(){
// 		this.gradeLevel++;
// 		return this;
// 	}
// 	whiteList(){
// 		this.permissions = "Admin"
// 		return this;
// 	}
// 	setGrade(grade){
// 		this.grade = grade
// 		return this;
// 	}
// }

// let jimmy = new Student("Jimmy O.", 12345, 12)

// console.log(jimmy)


//!Proper "class" Syntax
// class MyClass {
// 	constructor(){
// 		//default values
// 	}

// 	method1(){}
// 	method2(){}
// 	method3(){}
// }

// class User{
// 	constructor(){
// 		this.firstName = "Jimmy";
// 		this.lastName = "Smitty";
// 	}

// 	get fullName(){
// 		return `${this.firstName} ${this.lastName}`
// 	}

// 	set fullName(value){
// 		[this.firstName, this.lastName] = value.split(" ");
// 	}
// };

// let user = new User()

// user.fullName = "Aaron Hansen"

// console.log(user.fullName)



// class user
// set userName - > 4 letters
// set password - > 5 letters and 1 number
// login(username, password) if correct log("Welcome in (username)")

class User{
	constructor(){

	}
	set setUserName(username){
		if(username.length <= 4){
			console.log("username can't be less than 5 characters")
		}else{
			this.userName = username
		}
	}
	set setPassword(userPassword){
		let passwordArr = userPassword.split("")
		let number = false
		for(let i of passwordArr){
			if(i.toLowerCase() == i.toUpperCase()){
				number = true
			}
		}
		if(userPassword.length >= 5 && number == true){
			this.password = userPassword
		}else{
			console.log("Password can't be less than 6 characters and you need atleast one number.")
		}
	}
	login(loginUsername, loginPassword){
		if(loginUsername == this.userName && loginPassword == this.password){
			console.log(`Welcome in ${this.userName}!`)
		}else{
			console.log("Wrong username or password")
		}
	}
}

let test = new User()

test.setUserName = "Jan"
test.setPassword = "pasdd"

test.login("Jaxson", "passs1")


