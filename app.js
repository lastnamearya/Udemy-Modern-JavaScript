// // Window Methods / Objects / Properties

// console.log(123);

// window.console.log(123);

// // Alert

// window.alert('hello Peter Thiel');

// // Prompt
// const input = prompt();
// alert(input);

// // Confirm
// if(confirm('Are you sure')){
//   console.log('YES');
// } else {
//   console.log('No');
// }

let val;

// Outer Height and Width

val = window.outerHeight;
val = window.outerWidth;

// Inner Height and Width

val = window.innerHeight;
val = window.innerWidth;

// Scroll Points

val = window.scrollY;
val = window.scrollX;

// Location Object

val = window.location;
val = window.location.hostname; 
val = window.location.port;
val = window.location.href;
val = window.location.search;

// // Redirect

// window.location.href = 'https://google.com';

// // Reload

// window.location.reload();

// History Object

window.history.go(-2);
val = window.history.length;

// Navigator Object

val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

console.log(val); 