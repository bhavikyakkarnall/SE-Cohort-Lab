/* 
console.log("EXCERCISE 1")// Exercise 1
console.log("")

console.log("" + 1 + 0 ) // 10
console.log("" - 1 + 0)  //  -1
console.log(true + false)    // 1
console.log(!true)   //  false
console.log(6 / "3") //  2
console.log("2" * "3")   // 6
console.log(4 + 5 + "px")    //9px
console.log("$" + 4 + 5) // $45
console.log("4" - 2) // 2
console.log("4px" - 2)   // NaN
console.log(" -9 " + 5)  // -9 5
console.log(" -9 " - 5)  // -14
console.log(null + 1)    // 1
console.log(undefined + 1)   //NaN
console.log(undefined == null)   // true
console.log(undefined === null)  //false
console.log(" \t \n" - 2)    //-2

console.log("")
console.log("EXCERCISE 2")// Exercise 2
console.log("")

let three = "3" 
let four = "4"
let thirty = "30"

//what is the value of the following expressions?
let addition = three + four //34  // it is incorrect because its a string and "+" operator works as concatinator 
let correctAddition = parseInt(three) + parseInt(four)  //7
let multiplication = three * four   //12
let division = three / four //0.75
let subtraction = three - four  //1
let lessThan1 = three < four    //true
let lessThan2 = thirty < four   //false
let correctlessThan2 = parseInt(thirty) < parseInt(four)   //false


console.log(addition)
console.log(correctAddition)
console.log(multiplication)
console.log(division)
console.log(subtraction)
console.log(lessThan1)
console.log(lessThan2)
console.log(correctlessThan2)


console.log("")
console.log("EXCERCISE 3")// Exercise 3
console.log("")

if (0) console.log('#1 zero is true')   // wont work - because "0" is determined as false
if ("0") console.log('#2 zero is true') // will work - because there is value inputed 
if (null) console.log('null is true')   // wont work - because "null" is determined as no value which is if statements thinks it is a false
if (-1) console.log('negative is true') // will work
if (1) console.log('positive is true')  // will work

console.log("")
console.log("EXCERCISE 4")// Exercise 4
console.log("")

let a = 4, b = 3;
let result = `${a} + ${b} is `;
if (a + b < 10) {
result += 'less than 10';
} else {
result += 'greater than 10';
}
console.log(result) // The "+=" Concatinates the values determined from the if loop into the result variable. */

/* console.log("")
console.log("EXCERCISE 5")// Exercise 5
console.log("")

function getGreeting(name) {
    return 'Hello ' + name + '!';
    }

console.log(getGreeting("Bhavik"))

console.log("a) function expression syntax")

const greetings = function(name){
    return 'Hello ' + name + '!';
}

console.log(greetings("Bhavik"))


console.log("b) arrow function syntax")

const newGreetings = name => {
    return 'Hello ' + name + '!';
}

console.log(newGreetings("Bhavik")) */

/* console.log("")
console.log("EXCERCISE 6")// Exercise 6
console.log("")

const westley = {
    name: 'Westley',
    numFingers: 5
    }
const rugen = {
    name: 'Count Rugen',
    numFingers: 6
    }
const inigo = {
    firstName: 'Inigo',
    lastName: 'Montoya',
    greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName} . `;
    console.log(greeting + this.getCatchPhrase(person));
    },
    getCatchPhrase: person => {
        if(person.numFingers == 6){
            return 'You killed my father. Prepare to die.'
        }
        else{
            return 'Nice to meet you.'
        }
    }
        
    // getCatchPhrase(person) {
    //     if(person.numFingers == 6){
    //         return 'You killed my father. Prepare to die.'
    //     }
    //     else{
    //         return 'Nice to meet you.'
    //     }
    // }
    }
inigo.greeting(westley)
inigo.greeting(rugen) */

/* 
console.log("")
console.log("EXCERCISE 7")// Exercise 7
console.log("")

const basketballGame = {
    score: 0,
    fouls: 0,

    freeThrow: function() {
    this.score++;
    return this;
    },

    basket: function() {
    this.score += 2;
    return this;
    },

    threePointer: function() {
    this.score += 3;
    return this;
    },

    halfTime: function() {
    console.log('Halftime score is '+this.score);
    console.log('Number of Fouls in Halftime '+this.fouls)
    },

    fullTime: function() {
        console.log('Fulltime score is '+this.score);
        console.log('Number of Fouls in Fulltime '+this.fouls)
    },

    foul: function(){
        this.fouls += 1;
        return this;
    },

    reset: function(){
        this.score = 0;
        this.fouls = 0;
        return this;
    }

    }

//modify each of the above object methods to enable function chaining as below:
basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime();

console.log("Another Game");

basketballGame.reset().basket().foul().freeThrow().freeThrow().basket().threePointer().halfTime();
 */
    
/* 
console.log("")
console.log("EXCERCISE 8")// Exercise 8
console.log("")

const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
    }

const melbourne = {
    name: 'Melbourne',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Melbourne'
    }

function printCityDetails(city){
    for (let x in city){
        var text;
        text = x +": " + city[x]
        console.log(text)
    }
}

printCityDetails(sydney)
printCityDetails(melbourne)
 */

/* 
console.log("")
console.log("EXCERCISE 9")// Exercise 9
console.log("")

let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let dog1 = 'Bingo';
let cat1 = { 
    name: 'Fluffy', 
    breed: 'Siberian',
    toString(){
        //return `{name:${this.name}, breed:${this.breed}}`;
        return JSON.stringify(this)
    }
};



console.log("Question a)");
let moreSports = [...teamSports];

moreSports.push("Netball");
moreSports.unshift("Baseball");
console.log(moreSports);



console.log("")
console.log("Question b)");
dog2 = dog1;
console.log(dog2);
dog2 = "Oreo"
console.log("New value: "+dog2);




console.log("")
console.log("Question c)");
cat2 = {...cat1};
console.log(cat2);
cat2.name = "Dotty";
console.log(cat2);




console.log("")
console.log("Question d)");
console.log("teamSport: "+ teamSports);
console.log("dog1: "+ dog1);
console.log("cat1: "+ cat1); */



console.log("")
console.log("EXCERCISE 10")// Exercise 10
console.log("")

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;

    this.canDrive = function() {
        if(this.age >= 18){
            return this.canDrive = true;
        }
        else{
            return this.canDrive = false;
        }
        
    } 
}


const user1 = new Person ("Bhavik", "15")
console.log(user1.canDrive());
const user2 = new Person("Kunal", "25")
console.log(user2);


class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.human = true;
        this.canDriveStatus = this.canDrive()    
    }

    canDrive(){
        return this.age >= 18;
    }

}

const user3 = new PersonClass("Sophia", "21")
console.log(user3)
 