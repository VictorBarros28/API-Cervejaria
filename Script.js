var request = new XMLHttpRequest()
var names = [];
var imgs =[];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var y = getRandomInt(0,24);

request.open('GET', 'https://api.punkapi.com/v2/beers', true)

request.onload = function() {
var data = JSON.parse(this.response)

data.forEach(beer => {
    // console.log(beer.name);
    // window.onload = function imageOption() {
    // document.getElementById("imageoption").src = beer.image_url; }  
  
})

data.forEach(function(beer,i){
    names[i] = beer.name; 
    imgs[i] = beer.image_url;
})
    var x = document.getElementById("root");
    var z = document.getElementById("names")
    z.innerHTML = names[y];
    console.log(imgs[y]);
    x.style.backgroundImage = 'url('+imgs[y]+')';
}

 console.log(y);
// Send request
request.send()

