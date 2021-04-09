let arr = []
for(i = 1; i <= 100; i++){
  arr.push(i)
}

for(i in arr){
  console.log(arr[i]%5);
  
  if(arr[i]%3 == 0){
    if(arr[i]%5 == 0){
      arr[i] = "FizzBuzz"
      continue
    }
    arr[i] = "Fizz"
  }else if(arr[i]%5 == 0){
    arr[i] = "Buzz"
  }
}
arr = arr.join(', ')
console.log(arr);
