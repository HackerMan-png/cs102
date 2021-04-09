// let cakeRecipe = new Map([
//     ['Butter', '1/2 cup'],
//     ['Eggs', '1 large'],
//     ['Vanilla Extract', '2 teaspoons'],
//     ['Flour', '1-1/2 Cups'],
//     ['Baking Powder', '1-3/4 teaspoons'],
//     ['Milk', '1/2 cup'],
// ]);

// cakeRecipe.set('White Sugar', '2 cups');

// if (cakeRecipe.has('Eggs') == true) {
//     cakeRecipe.set('Eggs', '2 large');
//     console.log(cakeRecipe.get('Eggs') + ' eggs');
// }
// cakeRecipe.delete('Vanilla Extract');
// cakeRecipe.set('Chocolate', '1 bar');

// for (entry of cakeRecipe.entries()) {
//     let string = `-${entry[0]}  ${entry[1]}`;
//     console.log(string);
// }

// let jsonRecipe = JSON.stringify(Object.fromEntries(cakeRecipe))

// jsonRecipe = JSON.parse(jsonRecipe)

// let cakeMap = new Map(Object.entries(jsonRecipe))

// let sched = '{"Title":"Conference","date":"2021-11-30T12:00:00.000"}'

// console.log(sched)
// // the function is called a reviver and the key , value parameters are ALWAYS needed
// jsonSched = JSON.parse(sched, function(key, value){
// 	if(key == 'date'){
// 		return new Date(value)
// 	}else{
// 		return value
// 	}
// })
// console.log(jsonSched)
// console.log(jsonSched.date)
// console.log(jsonSched.date.getDate())


let testObj = {
	name: "Jimmy",
	age: 40,
	city: "Phoenix",
}

let testJSON = JSON.stringify(testObj);
// first string is the name of the storage location
// second is the JSON object that you want to store there
localStorage.setItem("testStorage", testJSON)

// console.table(cakeRecipe);

// let megatron = new Map([
//     ['Name', 'Megatron'],
//     ['ID', '128y72465'],
//     ['Team', 'Decepticon'],
//     ['Kills', ''],
//     ['Deaths', '5'],
//     ['Movies', '6'],
//     ['Degree', ''],
//     ['LEDs', '40221'],
//     ['Favorite Animal', 'Rabbits'],
//     ['Favorite Food', ''],
// ]);

// for (entry of megatron.entries()) {
//     if (entry[0].length >= 5 && entry[1] != '') {
//         console.log(entry[0] + ': ' + entry[1]);
//     }
// }
// for (entry of megatron.entries()) {
//     if (isNaN(entry[1]) == false && entry[1] != '') {
//         console.log(entry[0] + ': ' + entry[1]);
//     }
// }
