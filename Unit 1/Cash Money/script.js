let userArr = []

class User {
    constructor(firstName, lastName, DOB, leavingCity, arrivingCity, leavingDate, returnDate, bags, meal, extras, drinkAlcohol, totalCost, id, timeGone, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.DOB = DOB;
        this.leavingCity = leavingCity;
        this.arrivingCity = arrivingCity;
        this.leavingCity = leavingCity;
        this.leavingDate = leavingDate;
        this.returnDate = returnDate;
        this.bags = bags;
        this.meal = meal;
        this.extras = extras;
        this.drinkAlcohol = drinkAlcohol;
        this.totalCost = totalCost;
        this.id = id;
        this.timeGone = timeGone;
        this.age = age;
    }

}
let idCount = 1

function addToList() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let DOB = document.getElementById("DoB").value;
    let leavingCity = document.getElementById("departing").value;
    let arrivingCity = document.getElementById("arriving").value;
    let leavingDate = document.getElementById("leaveDate").value;
    let returnDate = document.getElementById("returnDate").value;
    let bags = document.getElementById("bags").value;
    let mealOptions = document.getElementsByName("meal")
    let extrasLength = document.getElementsByName("extra")
    let extraString = ""
    let drinkAlcohol = false
    let totalCost = 300


    totalCost += bags * 20

    //Finding age

    let age = findAge(DOB)

    //Finding how long they will be gone
    let returnDateMs = new Date(Date.parse(returnDate))
    let leavingDateMs = new Date(Date.parse(leavingDate))

    let timeGoneMs = returnDateMs - leavingDateMs
    timeGoneMs += 25200000
    let timeGone = ""


    let days = 0
    while (timeGoneMs > 86400000) {
        if (timeGoneMs >= 86400000) {
            timeGoneMs -= 86400000
            days++
        }
    }

    timeGone = `Days: ${days}`

    for (let i = 0, length = mealOptions.length; i < length; i++) {
        if (mealOptions[i].checked) {
            var meal = mealOptions[i].value
        }
    }
    for (let i = 0, length = extrasLength.length; i < length; i++) {
        if (extrasLength[i].checked) {
            if (extraString != "") {
                extraString += `, ${extrasLength[i].value}`
                totalCost += 10
            } else {
                extraString += `${extrasLength[i].value}`
                totalCost += 10
            }

        }
        var extras = extraString
    }

    totalCost = `$${totalCost}`

    // Checks if the text boxes are empty
    if (firstName != "" && lastName != "" && DOB != "" && leavingCity != "" && arrivingCity != "" && leavingDate != "" && returnDate != "" && bags != "" && meal != "") {
        idCount++
        let user = new User(firstName, lastName, DOB, leavingCity, arrivingCity, leavingDate, returnDate, bags, meal, extras, drinkAlcohol, totalCost, idCount, timeGone, age);
        userArr.push(user)
        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";
        document.getElementById("DoB").value = "";
        document.getElementById("departing").value = "";
        document.getElementById("arriving").value = "";
        document.getElementById("leaveDate").value = "";
        document.getElementById("returnDate").value = "";
        document.getElementById("bags").value = "";
        for (let i = 0, length = mealOptions.length; i < length; i++) {
            mealOptions[i].checked = false
        }

        for (let i = 0, length = extrasLength.length; i < length; i++) {
            extrasLength[i].checked = false
        }
    }
    return DOB
}

function findAge(DOB) {

    let date = new Date(Date.parse(DOB))

    let todaysDateMs = Date.now()

    let ageInMs = todaysDateMs - date

    let age = new Date(ageInMs)
    age = age.getFullYear() - 1970

    if (age >= 21) {
        drinkAlcohol = true
    }
    return age
}


// prints the names in the array in the print area
function print() {
    let space = document.getElementById("names")

    space.innerHTML = "";
    for (i of userArr) {
        space.innerHTML += `<div onclick="showInfo(${i.id})"><span>${i.id}</span>${i.firstName} ${i.lastName}</div>`
    }
}

let currentID = "";
function showInfo(id) {
    let currentlyShowing = userArr.find(user => user.id === id);
    currentID = currentlyShowing

    document.getElementById("outfirstName").value = currentlyShowing.firstName
    document.getElementById("outlastName").value = currentlyShowing.lastName
    document.getElementById("outDoB").value = currentlyShowing.DOB
    document.getElementById("outbags").value = currentlyShowing.bags
    document.getElementById("outdeparting").value = currentlyShowing.leavingCity
    document.getElementById("outarriving").value = currentlyShowing.arrivingCity
    document.getElementById("outleaveDate").value = currentlyShowing.leavingDate
    document.getElementById("outreturnDate").value = currentlyShowing.returnDate
    document.getElementById("outdurration").textContent = currentlyShowing.timeGone
    document.getElementById("outmeal").value = currentlyShowing.meal
    document.getElementById("outage").textContent = currentlyShowing.age
    document.getElementById("outextras").textContent = currentlyShowing.extras
    document.getElementById("outextras").value = currentlyShowing.extras
    document.getElementById("outcost").textContent = currentlyShowing.totalCost

    return (currentlyShowing);

}


function updateList() {
    // let currentlyShowing = userArr.find(user => user.id === document.getElementById);

    let currentlyShowing = currentID

    currentlyShowing.firstName = document.getElementById("outfirstName").value
    currentlyShowing.lastName = document.getElementById("outlastName").value
    currentlyShowing.DOB = document.getElementById("outDoB").value
    currentlyShowing.bags = document.getElementById("outbags").value
    currentlyShowing.leavingCity = document.getElementById("outdeparting").value
    currentlyShowing.arrivingCity = document.getElementById("outarriving").value
    currentlyShowing.leavingDate = document.getElementById("outleaveDate").value
    currentlyShowing.returnDate = document.getElementById("outreturnDate").value
    currentlyShowing.timeGone = document.getElementById("outdurration").textContent
    currentlyShowing.meal = document.getElementById("outmeal").value
    currentlyShowing.age = document.getElementById("outage").textContent
    currentlyShowing.extras = document.getElementById("outextras").textContent
    currentlyShowing.extras = document.getElementById("outextras").value
    currentlyShowing.totalCost = document.getElementById("outcost").textContent
    document.getElementById("success").textContent = "You win!"
    findAge(currentlyShowing.DOB)
}

let jaxson = new User("Jaxson", "Hunt", "2003-03-19", "Phoenix", "Denver", "2021-01-23", "2021-01-27", 4, "Chicken", "", false, "$380", 1, "Days: 4", 17)
userArr.push(jaxson)
let jimmyA = new User("Jimmy", "A", "1980-11-08", "Flagstaff", "Glendale", "2021-01-13", "2021-04-27", 0, "Food", "Legroom", true, "$310", 2, "Days: atleast 3", 41)
userArr.push(jimmyA)
let jimmyZ = new User("Jimmy", "Z", "2000-05-09", "Place 1", "Place 2", "2012-01-02", "2021-01-24", 403, "None", "", true, "$8360", 3, "Days: a few", 20)
userArr.push(jimmyZ)
// let testQuery = document.querySelector("#userDropDown");

// let testOption = document.createElement("option")
// let att = testOption.setAttribute("value", `Yes`)
// let testingOption = testOption.textContent = `${jaxson.firstName} ${jaxson.lastName}`
// console.log(testOption);
// let testAppend = testQuery.appendChild(testOption)

