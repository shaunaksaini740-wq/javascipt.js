// Reduce - Reduces an Array to a single Value
// Used for Sum, product etc

const arr = [1, 2, 3, 4, 5, 6];

const sum = arr.reduce((acc, num) => acc + num, 10)  // THIS ACCUMULATOR HAS THE INITIAL VALUE 10 SO THE 10 WILL BE ADDED TO SUM

console.log(sum);

// acc (Accumulator) starts from 0 by default
// num - each num gets added to acc

/*
1st iteration: acc = 0; num = 1
result -> 1 , acc = result = 1

2nd iteration 1 + 2 = 3
result -> 3 , acc = 3
*/
