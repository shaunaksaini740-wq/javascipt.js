// FILTER
// RETURN A NEW ARRAY
// CREATES A NEW ARRAY BASED ON THE CONDITION
/*

| Feature  | `if-else`             | `filter()`                    |
| -------- | --------------------- | ----------------------------- |
| Type     | Conditional statement | Array method                  |
| Works on | Any condition         | Arrays only                   |
| Returns  | Nothing automatically | New filtered array            |
| Purpose  | Decision making       | Selecting elements from array |
| Syntax   | Simple condition      | Uses callback function        |


*/

const num = [10, 656, 5665, 454, 45, 88, 89, 22, 30];                     
const greater = num.filter(number=>number>50 && number<800);    // IT TAKES THE ARRAY AND MAKE TEMPOARY VARIABLE NUMBER AND CHECK THE CONDITION
                                                                //  AND RETURN INTO TE NEW ARRAY
console.log(greater);