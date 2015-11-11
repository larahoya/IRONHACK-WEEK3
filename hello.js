//if
function eat (food) {
  if (food === 'Pizza') {
    console.log('Yay ' + food);
  } else if (food === 'Cookies') {
    console.log(food + ' are good too')
  } else if (food === 'Brussel Sprouts') {
    console.log('Ok, enjoy eating ' + food)
  }
}

eat('Pizza');
eat('Cookies');
eat('Brussel Sprouts');



//each
var numbers = '80:70:90:100';

function averageColon(my_numbers) {
    var arr_numbers = my_numbers.split(':');
    var sum = 0
    arr_numbers.forEach(function(number) {
        sum = sum + parseInt(number);
    });
    return sum/arr_numbers.length;
}

//reduce
function averageColon(my_numbers) {
    var arr_numbers = my_numbers.split(':');
    var sum = arr_numbers.reduce(function(memo, number) {
        return parseInt(memo) + parseInt(number);
    });
    return sum/arr_numbers.length;
}

console.log(averageColon(numbers));


//scopes
var x = 5;
function three() {
    console.log(x);
}

function four() {
    x =4;
    console.log(x);
}

four();
three();


//closures
function ticketBuilder(transport) {
    return function(name) {
        console.log("Welcome, " + name + ". Here ir your ticket for the " + transport);
    }
}

var getPlaneTicket = ticketBuilder("plane");
var getTrainTicket = ticketBuilder("train");

getPlaneTicket("John Smith");
getPlaneTicket("Patty Bishop");



function ticketBuilder(transport) {
    var passengerNumber = 0;
    return function(name) {
        passengerNumber ++;
        console.log("Welcome, " + name + ". Here ir your ticket for the " + transport + "You are passenger #" + passengerNumber + ".");
    }
}

var getPlaneTicket = ticketBuilder("plane");
var getTrainTicket = ticketBuilder("train");

getPlaneTicket("John Smith");
getPlaneTicket("Patty Bishop");
getPlaneTicket("Patty");
getTrainTicket("John");



