let input = [5, 4, 3, 2, 1, 1, 1, 1, 1];
let potential = [];
let jumps = 0;
console.log(potential);
for (i in input) {
    potential.push(Number(input[i]) + Number(i));
}
console.log(potential);
for (j = 0; ; ) {
    console.log(potential[j]);
    if (potential[j] >= input.length - 1) {
        jumps++;
        break;
    }
    let largest = 0;
    for (l in potential) {
        if (l <= input[j] && potential[l] >= largest) {
            largest = potential[l] - 1;
        }
    }

    j = largest - 1;
    jumps++;
}

// console.log(jumps)
