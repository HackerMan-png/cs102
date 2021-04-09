let input = `'Martin Pratt: 53%',
'Kain Gibbs: 76%',
'Shantelle Shah: 82%',
'Ritik Alcock: 80%',
'Abdurahman Ratcliffe: 57%',
'Bailey Garcia: 68%',
'Freyja Joyce: 99%',
'Abraham Davison: 92%',
'Zarah Cote: 95%',
'Aayush Keith: 100%',
'Melvin Fischer: 58%',
'Blane Ayala: 68%',
'Gregg Zuniga: 76%',
'Rizwan Goodwin: 64%',
'Denise Turner: 84%',
'Shelly Reed: 89%',
'Robin Ellwood: 87%',
'Pollyanna Hopkins: 67%',
'Darcey Martins: 79%',
'Javan Rankin: 92%',
'Lina Flower: 99%',
'Millie-Rose Lacey: 65%',
'Lynda Whitley: 100%',
'Emrys Banks: 77%',
'Bradleigh Hodges: 60%',
'Aishah Knott: 94%',
'Shannen Blanchard: 90%',
'Ellise Watson: 56%',
'Kimora Carver: 54%',
'Elaina Allison: 59%',
'Kobe Odom: 61%',
'Keeleigh Searle: 97%',
'Coby Peters: 52%',
'Leslie Whitmore: 93%',
'Christian Cook: 65%',
'Esme Downes: 77%',
'Nico Clegg: 74%',
'Aine Welch: 82%',
'Noah Huber: 97%',
'Dewey Benton: 55%',
'Ubaid Shannon: 88%',
'Todd Chadwick: 81%'`

let arr = input.split("\n")
let students = new Map([])
for(i in arr){
	let arrSplit = arr[i].replace("'", "").split(":")
	students.set(arrSplit[0], arrSplit[1].replace(" ", "").replace("'", "").replace("%", "").replace(",", ""))
}
let numberOfStudents = 0

for(entry of students.entries()){
	console.log(entry[0])
}
console.log(students.size)

let extraStudents  = `Isobella Moyer: 95%
Star Mcdougall: 56%
Blade Lennon: 72%
Karishma Molloy: 92%
Gregor Garner: 63%
Alec Peterson: 100%
Letitia Benitez: 67%
Elicia Hoover: 55%`

let extraStudentsArr = extraStudents.split("\n")
for(i in extraStudentsArr){
	let arrSplit = extraStudentsArr[i].replace("'", "").split(":")
	students.set(arrSplit[0], arrSplit[1].replace(" ", "").replace("%", ""))
}

let averageGrade = 0
for(entry of students.entries()){
	averageGrade += Number(entry[1])
}
averageGrade = averageGrade/students.size
console.log(averageGrade)
for(let i = 0; i < 4; i++){
	let highestPerson
	let lowestPerson
	let lowest = 100
	let highest = 0
	for(entry of students.entries()){
		if(entry[1] > highest){
			highestPerson = entry[0]
			highest = entry[1]
		}
		if(entry[1] < lowest){
			lowestPerson = entry[0]
			lowest = entry[1]
		}
	}
	students.delete(lowestPerson)
	students.delete(highestPerson)
}



console.table(students)
for(entry of students.entries()){
	console.log(entry)
}
