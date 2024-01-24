//Variables
let first_name ='Bryan', last_name = 'Gonzalez'; //String Literal
console.log(first_name);
console.log(last_name)

//Constants
const INTEREST_RATE = 0.3;
console.log(INTEREST_RATE);

//Variable types
let my_age = 26; //Number Literal, primitive
let is_approved = true; // Boolean Literal, primitive
let blank = undefined; //undefined type AND value, primitive
let selected = null;//Object, not a premitive

//Objects
let person = {
    name: "Ashli",
    age: 23
};

person.name = 'Maggie';
let selection ='age';
person[selection] = 5;

console.log(person);

//Arrays
let selected_color = ['red', 'blue'];
selected_color[2] = 1;

console.log(selected_color);
console.log(selected_color[0]);
console.log(selected_color.length);

selected_color.forEach(element => {
    console.log("Element: " + element);
});

for (let i = 0; i < selected_color.length; i++) {
    console.log('Element ' + (i+1) + ": "+ selected_color[i]);
}

//Functions
function greet(first_name, last_name){
    console.log('Hello ' + first_name + ' ' + last_name);
}

function square(num){
    return num*num;
}

function fibonacci(num){
    if(num == 0){
        return 0;}
    if(num == 1){
        return 1;}
    return(fibonacci(num-1) + fibonacci(num-2));
}

greet('Ashli', 'Gonzalez');
greet('Bryan');
greet(420, 'Blaze it')

let fibonacci_array = [];
for(let i = 0; i < 10; i++){
    fibonacci_array[i] = fibonacci(i);
}

console.log(fibonacci_array);
