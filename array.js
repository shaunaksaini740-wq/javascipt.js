let fruits = ["Apple", "Banana", "Cherry"];

fruits.push("Grapes"); //IT WILL ADD THE ELEMENT TO ARRAY
fruits.pop();          //IT WILL REMOVE THE LAST ELEMT FROM ARRAY
fruits.push("Grapes");

console.log(fruits);     // IT WILL PRINT THE FULL ARRAY

console.log(fruits[1]);  // IT WILL PRINT THE ARRAY ELEMENT OF INDEX 1



fruits.forEach((fruit) => {    //THIS FOREACH FUNCTION THE ARRAY ELEMENT IN EACH LINE IN LOOP MANNER
    console.log(fruit);
});
