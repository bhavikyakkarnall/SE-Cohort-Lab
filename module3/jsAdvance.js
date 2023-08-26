console.log("MODULE 3 LABS - JS ADVANCED")

// console.log("")
// console.log("------------------------------EXCERCISE 1------------------------------")
// console.log("")

/* function makeCounter() {
    let currentCount = 0;
    return function () {
        currentCount++;
        console.log(currentCount)
        return currentCount;
    };
}

let counter1 = makeCounter();
counter1(); // 1
counter1(); // 2

//a) Create a second counter counter2 using the makeCounter function and test to see if it remains independent to counter1

let counter2 = makeCounter();
counter2();
counter2();
counter2(); */

// b) Modify makeCounter so that it takes an argument startFrom specifying where the counter starts from (instead of always starting from 0)

/* function makeCounter(startFrom) {
    let currentCount = startFrom;
    return function () {
        currentCount++;
        console.log(currentCount)
        return currentCount;
    };
}

console.log("new makeCounter function with startFrom argument.")

let newCounter1 = makeCounter(2);
newCounter1(); // 1
newCounter1(); // 2

let newCounter2 = makeCounter(10);
newCounter2();
newCounter2();
newCounter2(); */


// c) Modify makeCounter to take another argument incrementBy, which specifies how much each call to counter() should increase the counter value by.

/* function makeCounter(startFrom,incrementBy) {
    let currentCount = startFrom;
    return function () {
        currentCount = currentCount + incrementBy;
        console.log(currentCount)
        return currentCount;
    };
}

console.log("new makeCounter function with startFrom & incrementBy argument.")

let newCounter3 = makeCounter(0,2);
newCounter3();
newCounter3();
newCounter3(); */


// console.log("")
// console.log("------------------------------EXCERCISE 2------------------------------")
// console.log("")

/* function delayMsg(msg)
{
console.log(`This message will be printed after a delay: ${msg}`)
}
setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all') */

// a) What order will the four tests below print in? Why?

// It will print in reverse order - #4; #3; #2; #1

// b) Rewrite delayMsg as an arrow function

/* var delayMsg = (msg) => {console.log(`This message will be printed after a delay: ${msg}`)};

setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all')

// c) Add a fifth test which uses a large delay time (greater than 10 seconds)

const timeoutID = setTimeout(delayMsg, 10000, '#5: Delayed by 10s');


// d) Use clearTimeout to prevent the fifth test from printing at all.

clearTimeout(timeoutID); */


// console.log("")
// console.log("------------------------------EXCERCISE 3------------------------------")
// console.log("")

// function printMe() {
//     console.log('printing debounced message')
// }

/* a) Create a debounce(func) decorator, which is a wrapper that takes a function func and
suspends calls to func until there's 1000 milliseconds of inactivity. After this 1 second
pause, the most recent call to func should be executed and any others ignored. */

/* function debounce(func) {
    let timer;
    return function () {
        if(!timer){
            timer = -1;
            const result = setTimeout(func, 3000);
        return result;
        }
        //clearTimeout(timer);
        //console.log(func);
        //console.log(`This message will be printed after a delay:`)
    }
}

let output = debounce(printMe); //create this debounce function for a)
output();
output();
output();
 */

/* b) Extend the debounce decorator function to take a second argument ms, which defines the
length of the period of inactivity instead of hardcoding to 1000ms */

/* function debounce(func) {
    let timer;
    return function () {
        if (!timer) {
            timer = -1;
            //const result = setTimeout(func, ms);
            const result = func;
            return result;
        }
        clearTimeout(timer);
        //console.log(func);
        //console.log(`This message will be printed after a delay:`)
    }
}

const output = debounce(printMe);

setTimeout( printMe, 100);
setTimeout( printMe, 200);
setTimeout( printMe, 300); */


// console.log("")
// console.log("------------------------------EXCERCISE 4------------------------------")
// console.log("")

// a) Write a function printFibonacci() using setInterval that outputs a number in the Fibonacci sequence every second.

/* fibArr = [];
function printFibonacci(num1, num2, len) {
    fibArr.push(num1);
    fibArr.push(num2);
    for (let i = 0; i < len; i++) {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
        fibArr.push(sum);
    }
    //console.log(fibArr);
    return fibArr;
}

printFibonacci(0, 1, 10);
console.log(fibArr); */


/* var count = 0;
var num1 = 0;
var num2 = 1;

function printMe(msg) {
    console.log(msg)
}


let fibonacciSeq = setInterval(() => {
    count++;
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
    printMe(sum);
    if(count == 5) {
        clearInterval(fibonacciSeq);
        console.log("**********END**********")
    }
},
2000

);

setTimeout( () => clearInterval(fibonacciSeq),30*1000); */

// b) Write a new version printFibonacciTimeouts() that uses nested setTimeout calls to do the same thing

/* function repeatTimeout() {
    let counter = 1;
    var num1 = 0;
    var num2 = 1;
    // setTimeout only happens once, so we don't need the reference to cancel it
    setTimeout(function repeatThis(current) { // named function, so we can refer to it recursively
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
        console.log(sum);
        console.log("Current: "+current);
        // but we do need to call setTimeout recursively so that it repeats executing the function
        if (current < 5) setTimeout(repeatThis, 2000, current + 1) //repeat if limit not reached
    }, 2000, counter);
}
//repeatTimeout(); */

// c) Extend one of the above functions to accept a limit argument, which tells it how many numbers to print before stopping.

/* function repeatTimeout(delay, limit) {
    let counter = 1;
    var num1 = 0;
    var num2 = 1;
    // setTimeout only happens once, so we don't need the reference to cancel it
    setTimeout(function repeatThis(current) { // named function, so we can refer to it recursively
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
        console.log(sum);
        // but we do need to call setTimeout recursively so that it repeats executing the function
        if (current < limit) setTimeout(repeatThis, delay, current + 1) //repeat if limit not reached
    }, delay, counter);
}
//repeatTimeout(2000, 10); */

/* 
console.log("")
console.log("------------------------------EXCERCISE 5------------------------------")
console.log("")

let car = {
    make: "Porsche",
    model: '911',
    year: 1964,
    description() {
        console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
    }
};
//car.description(); //works
//setTimeout(car.description, 200); //fails

// a) Fix the setTimeout call by wrapping the call to car.description() inside a function
// setTimeout(function(){
//     car.description();
// }.bind(car),200);

// b) Change the year for the car by creating a clone of the original and overriding it

const newCar = car;

console.log(newCar);
newCar.year = 2010;

console.log("new car deatils: ");
console.log(newCar);

setTimeout(function(){
    newCar.description();
}.bind(newCar),200);

// c) Does the delayed description() call use the original values or the new values from b)? Why?


// d) Use bind to fix the description method so that it can be called from within setTimeout without a wrapper function

// e) Change another property of the car by creating a clone and overriding it, and test that setTimeout still uses the bound value from d)

 */


/* 
console.log("")
console.log("------------------------------EXCERCISE 6------------------------------")
console.log("")

function multiply(a, b) {
    console.log(a * b);
} // prints 25 after 500 milliseconds

// a) Use the example multiply function below to test it with, as above, and assume that all delayed functions will take two parameters

// Function.prototype.delay = function(ms, arg1, arg2){
//     setTimeout(()=>{
//         return this.call(null, arg1, arg2)
//     },ms)
// }

// multiply.delay(500, 5, 5);

// b) Use apply to improve your solution so that delayed functions can take any number of parameters

Function.prototype.delay = function(delay, ...args) {
    setTimeout(() => this(...args), delay)
};

// c) Modify multiply to take 4 parameters and multiply all of them, and test that your delay prototype function still works.
function multiply4(a, b, c, d) {
    console.log(a * b * c * d);
} 

multiply4.delay(1000, 5, 5, 5, 5)
multiply.delay(2000, 5, 10)
 */


/* 
console.log("")
console.log("------------------------------EXCERCISE 7------------------------------")
console.log("")


// a) Define a custom toString method for the Person object that will format and print their details

function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;

    toString = () => { return `Name: ${this.name}; Age: ${this.age}; Gender: ${gender}` }

}
const person1 = new Person('James Brown', 73, 'male')

console.log(person1)

// b) Test your method by creating 2 different people using the below constructor function and printing them

const person2 = new Person('Harvey Specter', 40, 'Male')
const person3 = new Person('Donna Hotop', 30, 'Female')

console.log(person2)
console.log(person3)


// c) Create a new constructor function Student that uses call to inherit from Person and add an extra property cohort
// d) Add a custom toString for Student objects that formats and prints their details. Test with 2 students.
function Student(){
    Person.apply(this, arguments);
}

const student1 = new Student('Mike Ross', 28, 'Male')
console.log(student1)
 */

/* 
console.log("")
console.log("------------------------------EXCERCISE 8------------------------------")
console.log("")

class DigitalClock {
    constructor(prefix) {
        this.prefix = prefix;
    }
    display() {
        let date = new Date();
        //create 3 variables in one go using array destructuring
        let [hours, mins, secs] = [date.getHours(), date.getMinutes(),
        date.getSeconds()];
        if (hours < 10) hours = '0' + hours;
        if (mins < 10) mins = '0' + mins;
        if (secs < 10) secs = '0' + secs;
        console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
    }
    stop() {
        clearInterval(this.timer);
    }
    start() {
        this.display();
        this.timer = setInterval(() => this.display(), 1000);
    }
}
const myClock = new DigitalClock('my clock:')
//myClock.start() */


/* class PrecisionClock extends DigitalClock {
    display() {
        let date = new Date();
        //create 3 variables in one go using array destructuring
        let [hours, mins, secs, ms] = [date.getHours(), date.getMinutes(),
        date.getSeconds(), date.getMilliseconds()];
        if (hours < 10) hours = '0' + hours;
        if (mins < 10) mins = '0' + mins;
        if (secs < 10) secs = '0' + secs;
        if (ms < 10) ms = '0' + ms;
        console.log(`${this.prefix} ${hours}:${mins}:${secs}:${ms}`);
    }
    startMS(msInput) {
        if (msInput != null) {
            this.display();
            this.timer = setInterval(() => this.display(), msInput);
        }
        else {
            msInput = 1000;
            this.display();
            this.timer = setInterval(() => this.display(), msInput);
        }
    }
}

const myPrecisionClock = new PrecisionClock ('My precision clock:')
myPrecisionClock.startMS(2000) */

/* 
class AlarmClock extends DigitalClock {
    constructor(prefix, wakeupTime = '07:00') {
      super(prefix);
      this.wakeupTime = wakeupTime;
    }
  
    display() {
      let date = new Date();
      let [hours, mins, secs] = [date.getHours(), date.getMinutes(), date.getSeconds()];
  
      if (hours < 10) hours = '0' + hours;
      if (mins < 10) mins = '0' + mins;
      if (secs < 10) secs = '0' + secs;
  
      const currentTime = `${hours}:${mins}`;
  
      if (currentTime === this.wakeupTime) {
        console.log('Wake Up');
        this.stop();
      } else {
        console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
      }
    }
  }

const myAlarmClock = new AlarmClock('my alarm:', '19:35');
myAlarmClock.start(); */





/* 
console.log("")
console.log("------------------------------EXCERCISE 9------------------------------")
console.log("")

// function randomDelay() {
//     const delay = Math.floor(Math.random() * 20000) + 1000; // Random delay between 1 and 20 seconds

//     return new Promise((resolve) => {
//         setTimeout(resolve, delay);
//     });
// }

// randomDelay().then(() => console.log('There appears to have been a delay.'));



// function randomDelay() {
//     const delay = Math.floor(Math.random() * 20000) + 1000; // Random delay between 1 and 20 seconds

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (delay % 2 === 0) {
//                 resolve();
//             } else {
//                 reject('Delay failed!');
//             }
//         }, delay);
//     });
// }

// randomDelay()
//     .then(() => console.log('There appears to have been a successful delay.'))
//     .catch((error) => console.log('Delay failed:', error));






function randomDelay() {
    const delay = Math.floor(Math.random() * 20000) + 1000; // Random delay between 1 and 20 seconds

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (delay % 2 === 0) {
                resolve(delay);
            } else {
                reject(`Delay of ${delay} milliseconds failed!`);
            }
        }, delay);
    });
}

randomDelay()
    .then((delay) => console.log(`There appears to have been a successful delay of ${delay} milliseconds.`))
    .catch((error) => console.log('Delay failed:', error));

 */



console.log("")
console.log("------------------------------ EXCERCISE 10 ------------------------------")
console.log("")


/* 
//---------------------------------------------
//run 'npm init' and accept all the defaults
//run 'npm install node-fetch'
//add this line to package.json after line 5: "type": "module",
import fetch from 'node-fetch'

globalThis.fetch = fetch

async function fetchURLDataUsingAsync(url) {
    let response = await fetch(url);
    if (response.status === 200) {
        return await response.json();
    } else {
        throw new Error(`Request failed with status ${response.status}`);
    }
}

async function test_fetchURLDataUsingAsync() {
    try {
        var records = await fetchURLDataUsingAsync('https://jsonplaceholder.typicode.com/todos/1');
        console.log(records);
    }
    catch(error) {
        console.error(error.message);
    }
}

test_fetchURLDataUsingAsync(); */



import fetch from 'node-fetch'

globalThis.fetch = fetch

async function fetchURLDataUsingAsync(url) {
    let response = await fetch(url);
    if (response.status === 200) {
        return await response.json();
    } else {
        throw new Error(`Request failed with status ${response.status}`);
    }
}

async function test_fetchURLDataUsingAsync() {
    try {
        var records = await fetchURLDataUsingAsync('https://jsonplaceholder.typicode.com/todos/1');
        console.log(records);
    }
    catch(error) {
        console.error(error.message);
    }
}

test_fetchURLDataUsingAsync();