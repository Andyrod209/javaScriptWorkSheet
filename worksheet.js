// Days of the week
    // let or var work to create variables
// let dayOfWeek = 'monday';
//     // console.log() is like print() in python
// console.log(dayOfWeek);
// dayOfWeek = 'Friday';
// console.log("I can't wait for" + ' ' + dayOfWeek);

// User Input
    // prompt() gets user input and is always a string
// let animalInput = prompt('what is your favorite animal? ');
// let colorInput = prompt('What is your favorite color? ');
// console.log("I've never senn a " + colorInput + ' ' + animalInput);

// conditionals

    // favoriteBreakfast = 'Pancakes' 
    // favoriteLunch = 'Tacos'
    // favoriteDinner = 'Rice with steak'
// let timeOfDay = 1300;
// let oneOfFavoriteFood;
// if (timeOfDay < 1200){
//     oneOfFavoriteFood = 'Pancakes';
//     console.log(oneOfFavoriteFood);
// }
// else if(timeOfDay >= 1200 && timeOfDay <= 1700){
//     oneOfFavoriteFood = 'Tacos';
//     console.log(oneOfFavoriteFood);
// }
// else if(timeOfDay > 1700){
//     oneOfFavoriteFood = 'Rice with Steak';
//     console.log(oneOfFavoriteFood);
// }

// Random Number
let randomNumber = Math.floor(Math.random() *  11);
// ramdomnumber picks a number from 0 to 10 excludes 11
let singers;
// if statements looking for a true value to select singers name
if (randomNumber >= 0 && randomNumber <= 2){
    singers = 'Beatles';
    console.log(singers);
    }
else if(randomNumber >= 3 && randomNumber <= 5){
    singers = 'Stones';
    console.log(singers);
    }
else if(randomNumber >= 6 && randomNumber <= 8){
    singers = 'Floyd';
    console.log(singers);
    }
else if(randomNumber >= 9 && randomNumber <= 10){
    singers = 'Tacos';
    console.log(singers);
    }

// Loops
// for Loops
