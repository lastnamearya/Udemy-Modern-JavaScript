document.getElementById('button').addEventListener('click', loadData);

function loadData() {

  // Create an XHR Object
  const xhr = new XMLHttpRequest();

  // Optional used for spinners / loaders ( When we want to display something while it's loading)
  xhr.onprogress = function(){
    console.log("READYSTATE", xhr.readyState);    // 3 i.e Processing Request
  }

  // Create the callback

  // onload is pretty new, before that we do onreadystatechange, then we check to make sure that readystate is at 4, now it will check to the readystate that must be equal to 4
  xhr.onload = function() {
   if(this.status === 200) {
    console.log(this.responseText);
   } 
  }

  // Older Sytax

  // xhr.onreadystatechange = function() {
  //   console.log("READYSTATE", xhr.readyState);
  //   if(this.status === 200 && this.readyState === 4) {
  //       console.log(this.responseText);
  //     }
  //   }

  // On Error
  xhr.onerror = function() {
    console.log('Request Error');
  }

  // Open
  xhr.open('GET', 'data.txt', true);

  // Send request
  xhr.send();

}