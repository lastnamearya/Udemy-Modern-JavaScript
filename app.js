document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJSON);

// Get local file data
function getText() {
  fetch('text.txt')
  .then(function(res){
    return res.text();    // If we want JSON then we type res.JSON()
  })
  .then(function(data){
    console.log(data);
    document.getElementById('output').innerHTML = data;
  })
  .catch(function(err){
    console.log(err);
  })
}

// Get local JSON Data
function getJSON() {
  fetch('posts.json')
  .then(function(res){
    return res.json();    
  })
  .then(function(data){
    console.log(data);
    let output = "";
    data.forEach(function(post){
      output += `<li>${post.title}</li>`;
    });
    document.getElementById('output').innerHTML = output;
  })
  .catch(function(err){
    console.log(err);
  })
}