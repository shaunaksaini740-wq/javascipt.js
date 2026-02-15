// ACCESSING THE DOM

const heading = document.getElementById("title");
const button = document.getElementById("btn");


// CHANGE THE FONT AND SIZE.

heading.innerText = "welcome to dom";
heading.style.fontSize = "100px";

/*👉 Here: .addEventListener()========>
inputValue = input element
"input" = event (when user types)
function = runs when event happens

*/

button.addEventListener('click',function()      
{
    alert('button hs been clicked');
})