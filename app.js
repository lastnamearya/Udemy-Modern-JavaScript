document.getElementById('button').addEventListener('click', loadData);

function loadData() {

  // Create an XHR Object
  const xhr = new XMLHttpRequest();

  // Create the callback

  // onload is pretty new, before that we do onreadystatechange, then we check to make sure that readystate is at 4, now it will check to the readystate that must be equal to 4
  xhr.onload = function() {
   if(this.status === 200) {
    console.log(this.responseText);
   } 
  }

  // Open
  xhr.open('GET', 'data.txt', true);

  // Send request
  xhr.send();

}