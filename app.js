let val;

val = document;
val = document.all;
val = document.all[3];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

val = document.forms;

// Select First Form
val = document.forms[0];

// Get Stuff from Forms
val = document.forms[0].id;

// Forms have methods like get and post
val = document.forms[0].method;

// *********************************************************************** //

// We can find links in our document
val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList[0];

val = document.images;

val = document.scripts;
val = document.scripts[2].getAttribute('src');

console.log(val);