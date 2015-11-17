//object constructor
var Car = function(model, noise) {
  this.model = model;
  this.noise = noise;
  this.numberOfWheels = 4;
  this.makeNoise = function() {
    console.log(this.noise)
  }
};

var car = new Car('Golf', 'brrr');
var car2 = new Car('Renault', 'bruuuum');

car.makeNoise();
car2.makeNoise();


//callback
function slow(num1, num2, callback) {
  var suma = num1 + num2;
  callback(suma, true);
}

function done(sum, is_ok) {
  if(is_ok) {
    console.log(sum);
  } else {
    console.log('corre');
  }
}

slow(1,2,done);

//callback
function sleep(time, callback) {
  setTimeout(callback, time);
}

function wakeUp() {
  console.log("Good morning");
}

sleep(2000, wakeUp);

//cuenta atras
function printing(number) {
  return function() {
    console.log(number);
  }
}

function countDown(seconds, callback) {
  for(var i = seconds; i>0; i--) {
    setTimeout(printing(i), (seconds - i) *1000)
  }
  setTimeout(callback, seconds*1000);
}

countDown(10, printing('BOOM!'));