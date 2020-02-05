var request = new XMLHttpRequest()
var names;
var imgs;
var fab;
var teor;

request.open('GET', 'https://api.punkapi.com/v2/beers/random', true)

request.onload = function() {
var data = JSON.parse(this.response)

data.forEach(beer => {
    
})

data.forEach(function(beer){
    names = beer.name; 
    imgs = beer.image_url;
    fab = beer.first_brewed;
    slogan = beer.tagline;
    teor = beer.abv;
})

if(imgs == null){
    document.getElementById("img1").style.backgroundImage = 'url(https://www.malhariapradense.com.br/wp-content/uploads/2017/08/produto-sem-imagem.png)';
    document.getElementById("nome1").innerHTML = names;
    document.getElementById("descricao1").innerHTML = "Primeira fabricação: " + fab + " || " + "Teor alcólico: " + teor + "%";
    document.getElementById("slogan1").innerHTML = slogan;
    document.getElementById("nome1").innerHTML = names;
} else{
    document.getElementById("img1").style.backgroundImage = 'url('+imgs+')';
    document.getElementById("descricao1").innerHTML = "Primeira fabricação: " + fab + " || " + "Teor alcólico: " + teor + "%";
    document.getElementById("slogan1").innerHTML = slogan;
    document.getElementById("nome1").innerHTML = names;
}
   

}

// Send request
request.send()
