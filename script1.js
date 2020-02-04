var request = new XMLHttpRequest()
var names;
var imgs;

request.open('GET', 'https://api.punkapi.com/v2/beers/random', true)

request.onload = function() {
var data = JSON.parse(this.response)

data.forEach(beer => {
    
})

data.forEach(function(beer){
    names = beer.name; 
    imgs = beer.image_url;
})

if(imgs == null){
    document.getElementById("img1").style.backgroundImage = 'url(https://www.malhariapradense.com.br/wp-content/uploads/2017/08/produto-sem-imagem.png)';
    document.getElementById("nome1").innerHTML = names;
} else{
    document.getElementById("img1").style.backgroundImage = 'url('+imgs+')';

    document.getElementById("nome1").innerHTML = names;
}
   

}

// Send request
request.send()
