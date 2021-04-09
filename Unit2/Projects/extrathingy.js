let input = [5,4,3,2,1,1,1]
let jumps = 0
let potentials = []


loop:
while (true) {
  for (i in input) {
    potentials.push(Number(input[i]) + Number(i))
  }

  console.log(potentials);
  
  for (let j = 0;;) {
    
    if (potentials[j] >= input.length - 1) {
      jumps++
      break loop;
    }
    let largest = 0
    for (l in potentials) {
      if (l <= potentials[j] + 1) {
        if (potentials[l] >= largest) {
          largest = potentials[l]
        }
      }
    }
    console.log(j);
    
    j = largest-1
    console.log(j)
    jumps++
  }
}

console.log(jumps);



















// while (true) {
  //   for (let i = 0; i < input.length;) {
  //     let tempPossibleIndex = []
  //     let tempPossibleValue = []
  //     if (possibleIndex == []) {
  //       for (j + 1; j <= input[i]; j++) {
  //         tempPossibleValue.push(input[j])
  //         tempPossibleIndex.push(j)
  //       }
  //     } else {
  //       for (let j = 1; j <= possibleIndex[i]; j++) {
  //         tempPossibleValue.push(input[j])
  //         tempPossibleIndex.push(j)
  //       }
  //     }
  //     if (tempPossibleIndex.includes(input.length - 1)) {
  //       jumps++
  //       break
  //     }
  //     possibleValue = [...tempPossibleValue]
  //     possibleIndex = [...tempPossibleIndex]

  //     jumps++
  //   }
  // }

// console.log(jumps);
