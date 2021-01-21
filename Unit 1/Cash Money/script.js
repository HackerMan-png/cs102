class User {
    constructor(firstName, lastName, DOB, leavingCity, arrivingCity, leavingDate, returnDate, bags, mealOption, extras, id) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.DOB = DOB
        this.leavingCity = leavingCity
        this.arrivingCity = arrivingCity
        this.leavingCity = leavingCity
        this.leavingDate = leavingDate
        this.returnDate = returnDate
        this.bags = bags
        this.mealOption = mealOption
        this.extras = extras
        this.id = id;
    }


}

let userList = []
let idCount = 1

function addToList() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let DOB = document.getElementById("DOB").value;
    let leavingCity = document.getElementById("leavingCity").value;
    let arrivingCity = document.getElementById("arrivingCity").value;
    let leavingDate = document.getElementById("leavingDate").value;
    let returnDate = document.getElementById("returnDate").value;
    let bags = document.getElementById("bags").value;
    let mealOptions = document.getElementsByName("meal")



    for (let i = 0, length = mealOptions.length; i < length; i++) {
        if (mealOptions[i].checked) {
            var meal = mealOptions[i].value
        }
    }
    let extras = document.getElementById("extras").value;
    console.log(bags);
    console.log(meal);

    if (firstName != "" && lastName != "" && DOB != "" && leavingCity != "" && arrivingCity != "" && leavingDate != "" && returnDate != "" && bags != "" && meal != "") {
        let user = new User(firstName, lastName, DOB, leavingCity, arrivingCity, leavingDate, returnDate, bags, mealOption, extras, idCount);
        idCount++
        userList.push(user)
        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";
        document.getElementById("DOB").value = "";
        document.getElementById("leavingCity").value = "";
        document.getElementById("arrivingCity").value = "";
        document.getElementById("leavingDate").value = "";
        document.getElementById("returnDate").value = "";
        document.getElementById("bags").value = "";
        document.getElementById("mealOption").value = undefined;
        document.getElementById("extras").value = undefined;
    }
}

function print() {
    let space = document.getElementById("printSpace")

    space.innerHTML = "";
    for (i of userList) {
        space.innerHTML += `<div><span>${i.id}</span>${i.firstName} ${i.lastName}</div>`
    }
}