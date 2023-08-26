console.log("MODULE 3 LABS - JS INTERMEDIATE")

/* 
console.log("")
console.log("------------------------------EXCERCISE 1------------------------------")
console.log("")

input = "This is my 1 exercise from Module 3 Labs JS Intermediate."
console.log("Input: "+input)

const arr = input.split(" ");

for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
}

const str2 = arr.join(" ");
console.log("Output: "+str2); 
*/


/* 
console.log("")
console.log("------------------------------EXCERCISE 2 ------------------------------")
console.log("")


const truncate = (str, max) => { return str.length >= max ? str.slice(0,max) + "..." : str;};


// function truncate(str, max) {
//     if(str.length >= max) {
//         return str.slice(0,max) + "..."
//     }
//     else{
//         return str
//     }
// }

// console.log(truncate("This is my 1 exercise from Module 3 Labs JS Intermediate.",12));
console.log(truncate('This text will be truncated if it is too long', 10))  
*/


/* 
console.log("")
console.log("------------------------------EXCERCISE 3 ------------------------------")
console.log("")

const animals = ['Tiger', 'Giraffe']
console.log(animals)

animals.push("Lion");
animals.push("Cheetah");

console.log("a) New animals added in the end: ")
console.log(animals)

animals.unshift("Monkey");
animals.unshift("Pig");

console.log("b) New animals added in the end: ")
console.log(animals)

console.log("c) Sort the values alphabetically: ")
console.log(animals.sort())

console.log("d) Replace middle value ")

function replaceMiddleAnimal(array,newValue){
    middleIndex = array.length / 2;
    array[middleIndex] = newValue;
}
replaceMiddleAnimal(animals,"Donkey")
console.log(animals)

console.log("e) Find matching values ")

// function findMatchingAnimals(arr, beginWith){
//     let newArray = arr.filter(callback(currentValue[, index[, array]]) {
//         // return element for newArray, if true
//       }[, thisArg]);
// }
animals.seachstring 
*/






/* 
console.log("")
console.log("------------------------------EXCERCISE 4 ------------------------------")
console.log("")

function camelCase(caseProp) {
    arr = caseProp.split("-");

    //console.log(splitInput);
    for (var i = 1; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    
    const str2 = arr.join("");
    console.log("Output: "+str2);
}

camelCase("margin-left"); 
*/



/* 
console.log("")
console.log("------------------------------EXCERCISE 5 ------------------------------")
console.log("")

let twentyCents = 0.20
let tenCents = 0.10
//console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
// 0.2 + 0.1 = 0.30000000000000004

let answer = twentyCents + tenCents;

console.log("a) Correct answer with two decimals")
console.log(answer.toFixed(2))

console.log("b) Function to add two decimal values")

function currencyAddition(float1, float2){
    let answer = float1 + float2;
    floatAns = answer.toFixed(2);
    return floatAns
}

console.log(currencyAddition(0.10000, 0.35667))

console.log("c) Function to perform required operation to two decimal values")

function currencyOperation(float1, float2, operator){
    if(operator == "+" | "add" | "Add" | "ADD" | "Addition" | "addition" | "ADDITION"){
        answer = float1 + float2;
        floatAns = answer.toFixed(2);
        return floatAns
    }
    if(operator == "-" | "sub" | "Sub" | "SUB" | "substract"| "Substract"| "SUBSTRACT"){
        answer = float1 - float2;
        floatAns = answer.toFixed(2);
        return floatAns
    }
    if(operator == "/" | "div" | "Div" | "DIV" | "divide" | "Divide" | "DIVIDE"){
        answer = float1 / float2;
        floatAns = answer.toFixed(2);
        return floatAns
    }
    if(operator == "*" | "mul" | "Mul" | "MUL" | "multiple" | "Multiple" | "MULTIPLE"){
        answer = float1 * float2;
        floatAns = answer.toFixed(2);
        return floatAns
    }
}

console.log(currencyOperation(22, 7, "+"))

console.log("d) Function to perform required operation with required decimal values")

function currencyOperation(float1, float2, operator, decimalValue){
    if(operator == "+" | "add" | "Add" | "ADD" | "Addition" | "addition" | "ADDITION"){
        answer = float1 + float2;
        floatAns = answer.toFixed(decimalValue);
        return floatAns
    }
    if(operator == "-" | "sub" | "Sub" | "SUB" | "substract"| "Substract"| "SUBSTRACT"){
        answer = float1 - float2;
        floatAns = answer.toFixed(decimalValue);
        return floatAns
    }
    if(operator == "/" | "div" | "Div" | "DIV" | "divide" | "Divide" | "DIVIDE"){
        answer = float1 / float2;
        floatAns = answer.toFixed(decimalValue);
        return floatAns
    }
    if(operator == "*" | "mul" | "Mul" | "MUL" | "multiple" | "Multiple" | "MULTIPLE"){
        answer = float1 * float2;
        floatAns = answer.toFixed(decimalValue);
        return floatAns
    }
}

console.log(currencyOperation(22.5, 7.5, "-", 4)) 
*/



/* 
console.log("")
console.log("------------------------------EXCERCISE 6 ------------------------------")
console.log("")

const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]
const newArray = ["Hello", "world", "I'm", "new", "to", "this", "world"]

var uniqueValue1 = [...new Set(colours)]
var uniqueValue2 = [...new Set(testScores)]
var uniqueValue3 = [...new Set(newArray)]

function uniqueValue(array){
    var unique = [...new Set(array)]
    console.log("Original array contains: " + array)
    return unique
}

console.log(uniqueValue(colours)) 
*/


/* 
console.log("")
console.log("------------------------------EXCERCISE 7 ------------------------------")
console.log("")

const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
    ];

function getBookTitle(bookId) {
  const book = books.find(book => book.id === bookId);
  console.log(book.title)
}

//getBookTitle(2);

function getOldBooks(year) {
    const book =  books.filter(book => book.year < year);
    console.log(book)
  }

  //getOldBooks(1950)


  function addGenre(g) {
    const book = books.map(book => ({ ...book, genre: g }));
    console.log(book)
  }

  addGenre('classic')
 */

/* 
console.log("")
console.log("------------------------------EXCERCISE 8 ------------------------------")
console.log("")

const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')


const phoneBookDEF = new Map()
phoneBookDEF.set('Daniel', '0518273493')
phoneBookDEF.set('Elli', '0318273493')
phoneBookDEF.set('Frank', '0918273493')

phoneBookABC.set('Caroline', '9198239356')

function printPhoneBook(contacts){
    for (let item of contacts){
        console.log(item)
    }
}

printPhoneBook(phoneBookABC)

console.log("Merged phonebook")
const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);
for (let item of phoneBook){
    console.log(item)
}
 */


/* 
console.log("")
console.log("------------------------------EXCERCISE 9 ------------------------------")
console.log("")

let salaries = {
    "Timothy": 35000,
    "David": 25000,
    "Mary": 55000,
    "Christina": 75000,
    "James": 43000
};

//console.log(Object.values(salaries));
// function sumSalaries(salaryObject) {
//     sumSalary = 0
//     for (let item of Object.values(salaryObject)) {
//         sumSalary = sumSalary + item
//     }
//     console.log("Total Salary: " + sumSalary)
// }

// sumSalaries(salaries)

// function getObjectKey(salaries, value) {
//     return Object.keys(salaries).find(key => salaries[key] === value);
//   }

const salaryMap = new Map(Object.entries(salaries))

function topEarner(salaryObject){
    topSalary = 0;
    const salaryMap = new Map(Object.entries(salaryObject))
    for (let item of Object.entries(salaryObject)) {
        if(topSalary<item){
            topSalary = item;
        }
    }
    topEarnerName = salaryMap.get()
    //console.log(Object.keys(topSalary)
}

 */



/* 
console.log("")
console.log("------------------------------EXCERCISE 10 ------------------------------")
console.log("")

const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())
console.log(today.getHours() + ' hours have passed so far today')
console.log(today.getMinutes() + ' minutes have passed so far today')
console.log(today.getSeconds() + ' seconds have passed so far today')

function calulateAge(birthDate,birthMonth,birthYear){
    var d1 = birthDate;
    var m1 = birthMonth;
    var y1 = birthYear;

    var date = new Date();
    var presentDate = date.getDate();
    var presentMonth = date.getMonth();
    var presentYear = date.getFullYear();

    var d = presentDate - d1;
    var m = presentMonth - m1;
    var y = presentYear - y1;

    console.log(`I am ${y} years, ${m} months and ${d} days old`)
}

calulateAge(5,5,1999);

function daysInBetween(date1,date2){
    var d1 = new Date(date1);
    var d2 = new Date(date2);
    var diff = (d2-d1)/(1000 * 3600 * 24);

    
    console.log("The amount of days in between: " + diff)
}

daysInBetween("05/1/2005","05/11/2005"); */