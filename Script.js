var request = new XMLHttpRequest()
var names = [];
var imgs =[];
var y = getRandomInt(0,24);



function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



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
    document.getElementById("root").style.backgroundImage = 'url('+imgs[y]+')';
    document.getElementById("nomes").innerHTML = names[y];
    console.log(names[y]);
}

 console.log(y);
// Send request
request.send()

