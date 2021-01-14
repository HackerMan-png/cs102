// // creating an array

// //name, age, hair color, city, hobby
// let myself = ["Jaxson", 17, "black", "Phoenix", "video games"]

// //city
// console.log(myself[3])
// //age
// console.log(myself[1])

// let newSelf = {
// 	name: "Jaxson",
// 	age: 17,
// 	hColor: "black",
// 	city: "Phoenix",
// 	hobby: "video games"
// }

// console.log(newSelf["city"])
// console.log(newSelf["age"])


// let redBear = {
// 	furColor: "red",
// 	avgWeight: 120,
// 	country: "Peru",
// 	lifeSpan: 6,
// 	pupluation: 12,
// 	diet: "fish, berries, people, and spam"
// }

// //Asian Black Bear



// let asianBlackBear = {
// 	furColor: "Black with some white",
// 	avgWeight: 298,
// 	country: "Himalayas, Indian Subcontinent, Korean Peninsula, Northeastern China, Russian Far East,  Honshū and Shikoku islands of Japan, and Taiwan",
// 	lifeSpan: 25,
// 	popluation: 12,
// 	diet: "fish, berries, people, and spam"
// }

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// let names = `Bethanie Bull
// Amman Burnett
// Aida Park
// Nabiha Griffith
// Rajveer Best
// Oluwatobiloba Hurst
// Nathalie Croft
// Raihan Conley
// Nichola Ferrell
// Cohan Fischer
// Sharon Devlin
// Ismaeel Molina
// Zackary Washington
// Wayne Hanson
// Jaeden Reid
// Emilie Valencia
// Alissia Irwin
// Sarah-Jane Howarth
// Lucinda Charlton
// Roseanna Logan
// Victor O'Gallagher
// Lillie-May Miranda
// Dilan Simon
// Yusha Rice
// Lyndon Daniel
// Madelaine Easton
// Austen Kenny
// Maddison Andrade
// Cameron Holland
// Rafferty Koch
// Roxy Hansen
// Hakim Milne
// Soraya Prince
// Giulia Burch
// Randy Bailey
// Tayyibah Beltran
// Sherry Heaton
// Daniyal Mackenzie
// Ayla Howe
// Marcia Stubbs
// Maria Fox
// Jaiden Kramer
// Arbaaz French
// Neo Hicks
// Briony Fountain
// Traci Mohamed
// Rowan Novak
// Cristian Nolan
// Jeanette Ray
// Reese Chavez`

// let namesArray = names.split("\n")

// let typingSpeed = {}

// function createList(array){
// 	for(i of array){
// 		let name = i
// 		let speed = Math.floor(Math.random()* 60 + 40) // 40-100
// 		typingSpeed[name] = speed
// 	}

	
// }

// createList(namesArray)
// console.log(typingSpeed)

// let tvStatus = {}
// function createTVObject(arrayObject){
// 	for(i of arrayObject){
// 		let key = i
// 		let randy = Math.ceil(Math.random()*3)

// 		let value = ""

// 		if(randy == 1){
// 			value = "off"
// 		}else{
// 			value = Math.ceil(Math.random()*99)
// 		}

// 		tvStatus[key] = value
// 	}
// }

// createTVObject(namesArray)

// console.log(tvStatus)


//create an object that will say the income of people in you employ
//100 names: 
//: 'intern' 10%
//: "10,000 - 20,000" 30%
//: "30,000 - 50,000" 50%
//: "80,000 - 120,000" 10%
//: 1 person CEO: 250,000

let names = `Nina Knight
Anees Hayes
Tobey Burt
Shamas Dalby
Bilal Craig
Ariyah Carter
Charleigh Christensen
Richard Noel
Acacia Gamble
Aurelia Salas
Asha Sheridan
Maizie Duggan
Frederick William
Mollie Olsen
Zuzanna Yang
Darryl Fox
Lily-Anne Mcloughlin
Muneeb Kent
Zayan Higgs
Wallace Mackie
Dana Bean
Kason Odom
Vinny Morales
Clementine Partridge
Georga Dixon
Jonah Keller
Codie Short
Blanche Carson
Traci Mclaughlin
Karol Ayala
Theodore Best
Polly Nava
Raja Munro
Lina Calvert
Zeynep Park
Kitty Richards
Gurleen Holcomb
Renee Rodriquez
Benedict Mcclure
Siana Scott
Kobie Adam
Ottilie Rhodes
Connie Guerra
Darcy Gill
Annabel O'Reilly
Anoushka Bouvet
Samiha Kane
Arun Parkes
Aya Medrano
Isaac Mcghee
Zachery Briggs
Genevieve Camacho
Britney Hampton
Bartosz Sutherland
Ksawery Crouch
Faisal Barron
Mared Davies
Lilliana Wiggins
Nikita Cousins
Sana Ashton
Dawson Sawyer
Jarrod Finney
Nyle Mackenzie
Vivien Cuevas
Felicia Hatfield
Anand Simon
Esa John
Kelsey Spooner
Ifrah Phelps
Elvis Weir
Kaydan Baker
Tomas Wicks
Marco O'Ryan
Lyla-Rose Rich
Beverly Wooten
Alesha Hutchinson
Charlie Pratt
Ayana Leach
Sidra Le
Cayden Lindsay
Isaak Whitehouse
Kieren Hill
Jevan Adams
Nettie Read
Sami Woodley
Berat Fry
Kamran French
Kairon Huang
Malik Suarez
Aizah Sutton
Hester Gaines
Jordanna Slater
Ayaan O'Brien
Tanner Owen
Valentino Bryant
Malaikah Peters
Mathew Mckee
Jamelia Clements
Ronald Walker
Martyn Jenkins`

let namesArray = names.split("\n")
let ceoExist = false
let people = {}
function createEmployees(array){
	for(i of namesArray){
		let income = 0

		if(ceoExist == false){
			income = 250000
			people[i] = income
			ceoExist = true
			continue
		}
		let value = Math.ceil(Math.random()*100)
		
		

		if(value <= 10){
			income = 0
			people[i] = income
		}else if(value <= 40){
			ranking = "Starting Employee"
			income = Math.ceil(Math.random()*10000 + 10000)
			people[i] = income
		}else if(value <= 90){
			ranking = "Mid-Tier Employee"
			income = Math.ceil(Math.random()*20000 + 30000)
			people[i] = income
		}else if(value <= 100){
			ranking = "High-end Employee"
			income = Math.ceil(Math.random()*40000 + 80000)
			people[i] = income
		}
	}
}

createEmployees(namesArray)

console.log(people)