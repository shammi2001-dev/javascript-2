// MULTIPLICATION TABLE
var multiplication = [];

for(var i=12 ; i<18 ; i++){
    for(var j=1 ; j<=10 ; j++){
        document.write(i+ ' X ' + j + ' = '+ j*i+'<br>')   
    }
}

// WHILE LOOP
var text = "";
var i = 0;
while (i < 10) {
  text += "<br>The number is " + i;
  i++;
}
document.getElementById("demo").innerHTML = text;

// SWITCH CASE
var marks=prompt('Enter your marks :'); 

switch(true){
  case(marks<0):
  document.write('INVALID');
  break;
  case(marks<33):
    document.write('Failed');
    break;
    case(marks>=33 && marks<=39):
    document.write('Your grade is D');
    break;
    case(marks>=40 && marks<=49):
    document.write('Your grade is C');
    break;
    case(marks>=50 && marks<=59):
    document.write('Your grade is B');
    break;
    case(marks>=60 && marks<=69):
    document.write('Your grade is A-');
    break;
    case(marks>=70 && marks<=79):
    document.write('Your grade is A');
    break;
    case(marks>=80 && marks<=100):
    document.write('Your grade is A+');
    break;
    default:
      document.write('INVALID')
}

// ARRAY
var flowers= ['Rose', 'Daisy','Orchid'];
console.log( flowers.push('Tulip','Iris'));
console.log(flowers);

var insect= ['Butterfly', 'Bee','Ladybug','Cockroach'];
console.log( flowers.pop());
console.log(flowers);

var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.unshift("Lemon","Pineapple"));
console.log(fruits);

var birds=['Owl','Dove','Penguin','Ostrich'];
console.log(birds.shift());
console.log(birds);
