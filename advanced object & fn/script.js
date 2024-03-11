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