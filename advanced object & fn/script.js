var Person = function(name, age, job) {
    this.name= name;
    this.age= age;
    this.job= job;
}

Person.prototype.YearofBirth = function() {
    this.YearofBirth = (2024 - this.age);
    return this.YearofBirth;
}

var john = new Person("John", 40, "Player");

console.log(john);
console.log(john.YearofBirth());


var age = 27
var obj = {
    name: "Yusuf",
    city: "Ibadan"
}

var change = function (a, b) {
    a = 30,
    b.city = "Lagos"
}

change (age, obj)

console.log(age);
console.log(obj.city);


// FIRST CLASS FUNCTIONS
var numbers = [4, 8, 26, 30, 25, 49, 182, 37];

function arrayCal (arr, fn) {
    var square = [];
    for(var i = 0; i < arr.length; i++) {
        square.push(fn(arr[i]));
    }
    return square;
}

function squareN(el) {
    return el ** 2;
}

var SquareNumber = arrayCal(numbers, squareN);
console.log(SquareNumber);


// Loop  Function 
var random = function rand() {
    for (var i = 1; i < 10; i++){
        var a = Math.random() * 10;
        var b = Math.floor(a);
        console.log(b);
    }
}

random();

// closure

function interviewQ(job) {
    return function(name) {
        if (job === "barber") {
            console.log(name + " How long have you been barbing?");
        } else if (job === "Briklayer") {
            console.log(name + " how many cements are to be used to a 3-bedroom flat?");
        } else {
            console.log("What do you do " + name + "?");
        }

    }
}

interviewQ("Bricklayer")("Adekunle");
interviewQ("Bricklayer")("Yusuf");
interviewQ("barber")("Sulaimon");


var Question = function(quizQuestion, quizQoption, correctAnswer) {
    this.quizQuestion = quizQuestion;
    this.quizQoption = quizQoption;
    this.correctAnswer = correctAnswer;
}

var q1 = new Question("Did I know this course?", ["Yes", "No"], "Yes");
var q2 = new Question("What is My Name?", ["Adebayo", "Adigun", "Yusuf"], "Yusuf");
var q3 = new Question("How Old I'm I?", ["10", "23", "24", "30"], "23");
var q4 = new Question("I'm I fasting today?", ["Yes", "No"], "Yes");
var q5 = new Question("I'm I in love?", ["Yes", "No"], "No");

var qArr = [q1, q2, q3, q4, q5];


function randomQuestion(a){
    console.log(qArr[a].quizQuestion);
    console.log(qArr[a].quizQoption);
}
randQ = Math.floor(Math.random() * qArr.length);
randomQuestion(randQ);