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
let salaries = {}
function createEmployees(array){
	for(i of namesArray){
		let income = 0

		if(ceoExist == false){
			income = 250000
			salaries[i] = income
			ceoExist = true
			continue
		}
		let value = Math.ceil(Math.random()*100)
		
		

		if(value <= 10){
			income = 0
			salaries[i] = income
		}else if(value <= 40){
			ranking = "Starting Employee"
			income = Math.ceil(Math.random()*10000 + 10000)
			salaries[i] = income
		}else if(value <= 90){
			ranking = "Mid-Tier Employee"
			income = Math.ceil(Math.random()*20000 + 30000)
			salaries[i] = income
		}else if(value <= 100){
			ranking = "High-end Employee"
			income = Math.ceil(Math.random()*40000 + 80000)
			salaries[i] = income
		}
	}
}

createEmployees(namesArray)

// console.log(salaries)

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

// let employees = 0;
// let ceo = '';
// for(let key in salaries){
// 	if(salaries[key] != '0' && salaries[key] != 250000){
// 		salaries[key] -= 5000;
// 		employees++
// 	}

// 	if(salaries[key] == 250000){
// 		ceo = key;
// 	}
// }

// salaries[ceo] += 5000 * employees

// console.log(salaries)
// console.log(`${ceo} is making ${salaries[ceo]}`)
createEmployees(namesArray)

let interns = 0;
let ceo = '';
let temp = 0
let stolenMoney = 0
for(let key in salaries){
	if(salaries[key] != '0' && salaries[key] != 250000){
		temp = salaries[key]/2;
		stolenMoney += temp
		salaries[key] - temp
	}
	
	if(salaries[key] == 0){
		interns += 1
	}

	if(salaries[key] == 250000){
		ceo = key;
	}
}

stolenMoney /= interns

stolenMoney = Math.round(stolenMoney)

for(let key in salaries){
	if(salaries[key] == 0){
		salaries[key] = stolenMoney
	}
}


console.log(salaries)
console.log(stolenMoney)