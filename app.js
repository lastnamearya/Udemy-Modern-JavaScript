const color = "yellow";

switch(color) {
  case 'red': 
    console.log('color is red');
    break;
  case 'blue':
    console.log('color is blue');
    break;
  default:
    console.log('color is not red or blue');
    break;
}

let day;

switch(new Date().getDay()) {
  case 0:
    day = "sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 3:
    day = "Tuesday";
    break;
  case 4:
    day = "Wednesday";
    break;
  case 5:
    day = "Thursday";
    break;  
  case 6:
    day = "Friday";
    break;
  case 7:
    day = "Saturday";
    break;
}

console.log(`Today is ${day}`);