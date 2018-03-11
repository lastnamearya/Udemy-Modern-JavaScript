document.getElementById('button1').addEventListener('click', getText);

function getText() {
  fetch('text.txt')
  .then(function(res){
    return res.text();    // If we want JSON then we type res.JSON()
  })
  .then(function(data){
    console.log(data);
  })
  .catch(function(err){
    console.log(err);
  })
}