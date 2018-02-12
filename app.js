let val;

const today = new Date();
const birthday = new Date('9-10-1981 11:25:00');

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear(); 
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime(); 

birthday.setMonth(2);
birthday.setDate(12); 

console.log(birthday);