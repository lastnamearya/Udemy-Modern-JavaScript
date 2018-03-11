document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJSON);

document.getElementById('button3').addEventListener('click', getExternal);

// ******************************************************************************* //

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

// Get from Local API
function getExternal() {
  fetch('https://api.github.com/users')
  .then(function(res){
    return res.json();    
  })
  .then(function(data){
    console.log(data);
    let output = "";
    data.forEach(function(user){
      output += `<li>${user.login}</li>`;
    });
    document.getElementById('output').innerHTML = output;
  })
  .catch(function(err){
    console.log(err);
  })
}