// Days of the week
    // let or var work to create variables
let dayOfWeek = 'monday';
    // console.log() is like print() in python
console.log(dayOfWeek);
dayOfWeek = 'Friday';
console.log("I can't wait for" + ' ' + dayOfWeek);

// User Input
    // prompt() gets user input and is always a string
let animalInput = prompt('what is your favorite animal? ');
let colorInput = prompt('What is your favorite color? ');
console.log("I've never senn a " + colorInput + ' ' + animalInput);

// conditionals

    // favoriteBreakfast = 'Pancakes' 
    // favoriteLunch = 'Tacos'
    // favoriteDinner = 'Rice with steak'
let timeOfDay = 1300;
let oneOfFavoriteFood;
if (timeOfDay < 1200){
    oneOfFavoriteFood = 'Pancakes';
    console.log(oneOfFavoriteFood);
}
else if(timeOfDay >= 1200 && timeOfDay <= 1700){
    oneOfFavoriteFood = 'Tacos';
    console.log(oneOfFavoriteFood);
}
else if(timeOfDay > 1700){
    oneOfFavoriteFood = 'Rice with Steak';
    console.log(oneOfFavoriteFood);
}

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
for(let i = 0; i < 7; i++){
    console.log('javaScript is cool!')
}

// loop that displays from 0 to 10
let  number = 0
for(let i = 0; i < 11; i++){
    console.log(number) 
    number += 1
}

// loop to display hello and then goodbye 5 times each 
for (let i = 0; i < 10; i++){
    if (i == 0 || i == 2 || i == 4 || i == 6 || i == 8){
        console.log('hello');
    }
    else if(i == 1 || i == 3 || i == 5 || i == 7 || i == 9){
        console.log('goodbye');
    }
}

// while loops
let fishFlying = true
let amountOfFishFlying = 1
while(fishFlying){
    console.log("That's "+ amountOfFishFlying +" fish flying")
    amountOfFishFlying += 1
    if(amountOfFishFlying == 6){
        fishFlying = false
    }
}

// functions

// Favorite Movie (void functions)
function printMovieName(){
    let favoriteMovie = "Spider Man No Way Home"
    console.log(favoriteMovie)
    // return is required for void functions
    return favoriteMovie
}
// calling the function
printMovieName()

// Favorite Band (return functions)

function printFavoriteBand(){
    let favoriteBand = prompt("Input your favorite band ")
    console.log(favoriteBand)
    return favoriteBand
}
// able to use function for many different users
let jacksFavoriteBand = printFavoriteBand()
let franksFavoriteBand = printFavoriteBand()

// // concert (parameters)

function concertDisplay(musicalAct){
    let myStreet = prompt('Enter your street address ')
    console.log("It would be great if " + musicalAct + " played a show on " + myStreet)    
}
let tims = concertDisplay('Rock Mits')

// Arrays

// Desktop items
let desktopItems = ['water', 'headset','lamp'];
console.log(desktopItems[1]);
desktopItems.push('Infinity Gauntlet');
// for loop displays desktopItems array
for(let i = 0; i < desktopItems.length; i++){
    console.log(desktopItems[i])
}

// Magic Number
let magicNumber = Math.floor(Math.random() * 10)
let guess = 0
while(guess != magicNumber){
    let userGuess = prompt()
    if(userGuess == magicNumber){
        guess = userGuess
        console.log(guess + ' Is the correct number! You win!')

    }

    else if(userGuess > magicNumber - 10 && userGuess < magicNumber){
        console.log('Too Low!')
        console.log('Getting warmer!')
    }

    else if(userGuess < magicNumber){
        console.log('Too Low!')
    }

    else if(userGuess < magicNumber + 10 && userGuess > magicNumber){
        console.log('Too High!')
        console.log('Getting warmer!')
    }

    else if(userGuess > magicNumber){
        console.log('Too High!')
    }
}