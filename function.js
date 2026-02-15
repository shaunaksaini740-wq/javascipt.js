/*

| Feature     | Normal Function | Arrow Function             |
| ----------- | --------------- | -------------------------- |
| Syntax      | Longer          | Short                      |
| `this`      | Own             | Parent                     |
| Hoisting    | Yes             | No                         |
| Constructor | Yes             | No                         |
| Best Use    | General purpose | Short functions, callbacks |

✅ When To Use What?

Use:

🔹 Arrow → small functions, callbacks

🔹 Normal → object methods, constructors

*/


function add(a, b) { // processed
    return a + b;
}

const res = add(2, 3); // input

console.log(res); // output



//ARROW

const sum = (a, b) => a + b;  
console.log(sum(4, 5));
