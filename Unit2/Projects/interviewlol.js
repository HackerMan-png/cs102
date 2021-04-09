let input = [9, 3, 4, 3,8,5,3,1,3,5,6,3,1,5,3,1,3,5,3,2,5,6,7,8,9,0,0,7,5,3,2,1,3,4,5,1,3,5,7,8, 2, 3, 5]
let num1 = 0
let num2 = 0
for (i in input) {
  num2 = 0
  for (j in input) {
    if(input[i] == input[j] && num1 != num2){
      input[j] = ""
    }
    num2++
  }
  num1++
}
console.log(input);
