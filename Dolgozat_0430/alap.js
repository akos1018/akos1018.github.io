
fetch("https://freegeoip.app/json/")
.then(x => x.json())
.then(y => foldrajzi(y));

function foldrajzi(adatok){
    //console.log(adatok);
    document.getElementById("felirat1").innerHTML= '<p class="kek">Földrajzi szélesség: ' + adatok.latitude+'</p>';
    document.getElementById("felirat1/2").innerHTML= '<p class="kek">Földrajzi szélesség: ' + adatok.longitude+'</p>';

}


//--------------------------------------------------------

fetch("https://api.exchangerate-api.com/v4/latest/USD")
.then(x => x.json())
.then(y => arfolyam(y));

function arfolyam(adatok){
    //console.log(adatok);
    document.getElementById('felirat2').innerHTML='<p class="kek">1 USD = ' + adatok.rates.HUF+' HUF (Ft)</p>';

}

fetch("https://api.exchangerate-api.com/v4/latest/EUR")
.then(x => x.json())
.then(y => arfolyameuro(y));

function arfolyameuro(adatok){
    console.log(adatok);
    document.getElementById('felirat2/2').innerHTML='<p class="kek">1 EUR = ' + adatok.rates.HUF+' HUF (Ft)</p>';
}

