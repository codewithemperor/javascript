// var Person = function(name, age, job) {
//     this.name= name;
//     this.age= age;
//     this.job= job;
// }

// Person.prototype.YearofBirth = function() {
//     this.YearofBirth = (2024 - this.age);
//     return this.YearofBirth;
// }

// var john = new Person("John", 40, "Player");

// console.log(john);
// console.log(john.YearofBirth());


// var age = 27
// var obj = {
//     name: "Yusuf",
//     city: "Ibadan"
// }

// var change = function (a, b) {
//     a = 30,
//     b.city = "Lagos"
// }

// change (age, obj)

// console.log(age);
// console.log(obj.city);


// // FIRST CLASS FUNCTIONS
// var numbers = [4, 8, 26, 30, 25, 49, 182, 37];

// function arrayCal (arr, fn) {
//     var square = [];
//     for(var i = 0; i < arr.length; i++) {
//         square.push(fn(arr[i]));
//     }
//     return square;
// }

// function squareN(el) {
//     return el ** 2;
// }

// var SquareNumber = arrayCal(numbers, squareN);
// console.log(SquareNumber);


// // Loop  Function 
// var random = function rand() {
//     for (var i = 1; i < 10; i++){
//         var a = Math.random() * 10;
//         var b = Math.floor(a);
//         console.log(b);
//     }
// }

// random();

// // closure

// function interviewQ(job) {
//     return function(name) {
//         if (job === "barber") {
//             console.log(name + " How long have you been barbing?");
//         } else if (job === "Briklayer") {
//             console.log(name + " how many cements are to be used to a 3-bedroom flat?");
//         } else {
//             console.log("What do you do " + name + "?");
//         }

//     }
// }

// interviewQ("Bricklayer")("Adekunle");
// interviewQ("Bricklayer")("Yusuf");
// interviewQ("barber")("Sulaimon");


// (function() {
//     function Question(quizQuestion, quizQoption, correctAnswer) {
//         this.quizQuestion = quizQuestion;
//         this.quizQoption = quizQoption;
//         this.correctAnswer = correctAnswer;
//     }
    
//     Question.prototype.displayQuestion = function() {
//         console.log(this.quizQuestion);
    
//         for (var i = 0; i < this.quizQoption.length; i++) {
//             console.log(i+1 + ":" + this.quizQoption[i]);
//         }
//     }
    
//     Question.prototype.checkAnswer = function(ans) {
//         if (ans === this.correctAnswer) {
//             console.log("Correct Answer");
//         } else {
//             console.log("Invalid Answer");
//         }
//     }
    
//     var q1 = new Question("Did I know this course?", ["Yes", "No"], 1);
//     var q2 = new Question("What is My Name?", ["Adebayo", "Adigun", "Yusuf"], 3);
//     var q3 = new Question("How Old I'm I?", ["10", "23", "24", "30"], 2);
//     var q4 = new Question("I'm I fasting today?", ["Yes", "No"], 1);
//     var q5 = new Question("I'm I in love?", ["Yes", "No"], 2);
    
    
//     var qArr = [q1, q2, q3, q4, q5];
    
//     function nextQuestion() {
            
//         var randQ = Math.floor(Math.random() * qArr.length);

//         qArr[randQ].displayQuestion();

//         var answer = prompt("Please Select the Correct Answer");
        
//         if (answer !== 'exit'){
//             qArr[randQ].checkAnswer(parseInt(answer));
//             nextQuestion();
//         }

//     }

//     nextQuestion();
     
// })();

// Create a JavaScript function called calculateAverage that takes an array of numbers as input and returns the average of those numbers. Your function should perform the following steps:

// Accept an array of numbers as input.
// Calculate the sum of all the numbers in the array.
// Divide the sum by the total number of elements in the array to find the average.
// Return the calculated average.

// function calculateAverage(array) {
//     var result = 0;

//     for (var i = 0; i < array.length; i++) {
//         result += array[i];
//      }
    
//      var length = array.length;
//     //  console.log(length);
//      var answer = result / length
//      console.log(answer);
     
//     }
    
// calculateAverage([10, 20, 30, 40, 50]);
// calculateAverage([-5, 0, 5]);
// calculateAverage([2, 4, 6, 8, 10]);

// // function CountVowels

// function countVowels(strings) {
//     var count = 0;
//     for (var i = 0; i < strings.length; i++) {
//         if (strings[i] === "a" || strings[i] === "e" || strings[i] === "i" || strings[i] === "o" || strings[i] === "u") {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countVowels("hello"));

// PROMISE
const getIds = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([453, 483, 292, 492]);
    }, 1500);
});

getIds
.then((id) => {
    console.log(id);
})
.catch(error => {
    console.log("error");
})
;