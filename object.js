/*

| Feature        | Array            | Object          |
| -------------- | ---------------- | --------------- |
| Data Structure | Ordered list     | Key-value pairs |
| Access Method  | Index number     | Key name        |
| Best For       | Lists of items   | Structured data |
| Syntax         | `[]`             | `{}`            |
| Example Use    | List of students | Student details |

*/

// OBJECTS - is a collection of data in key-value pairs

const person = {
    name: "Ritik",
    age: 26,
    Designation: "Manager",
};

console.log(person);

console.log(person.age);   // Dot notation WE CAN ALSO PRINTS WITH BOTH
console.log(person.name);

console.log(person["age"]);   // [] Square bracket notation
console.log(person["name"]);


person.city = "Modinagar";   // THIS LINE IS ADDING THE NEW KEY.
console.log(person);

person.age = 65;           // THIS LINE IS UPDATING THE KEY.
console.log(person);

delete person.age;       // THIS LINE IS THE DELETING THE KEY.
console.log(person);

console.log(Object.keys(person));    // THIS LINE IS THE PRINTING THE NAME OF KEYS
console.log(Object.values(person));  // THIS LINE IS PRINTING THE VALUES ASSIGN TO THE KEYS