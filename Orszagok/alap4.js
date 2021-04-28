var adatok0=[];
var veletlen=-1;
fetch("https://restcountries.eu/rest/v2/all")
.then(x => x.json())
.then(y => tarol(y));

function tarol(adatok){
    console.log(adatok);
    adatok0=adatok;
}

function sorsol(){
    veletlen=Math.floor(Math.random() * adatok0.length);
    
    var sz='<h4>Ország: '+adatok0[veletlen].name+'</h4>'; 
    sz+='<img src="'+adatok0[veletlen].flag+'" class="kiskep" style="margin-bottom: 10px">';
    sz+='<input type="text" id="bevitel" class="form-control">';
    sz+='<button class="btn btn-primary"  id="ellenorzes"  >Ellenőrzés</button>';
    
    document.getElementById("nepesseg").innerHTML=sz;

    document.getElementById("ellenorzes").addEventListener("click",ellenoriz);


}

var helyes = 0;
var helytelen = 0;
function ellenoriz(){
    var nepessegszam=document.getElementById("bevitel").value;
    if (adatok0[veletlen].population==nepessegszam){
        document.getElementById("visszajelzes").innerHTML='<h4>Gratulálok, a helyes megoldás:'+' '+adatok0[veletlen].population+' '+'Fő'+'</h4>';
        helyes++;
        document.getElementById("helyes").innerHTML='<h4>Jó tippek: '+'</h4>'+helyes;
    }
    else if (nepessegszam >= adatok0[veletlen].population * 0.9)
    {
        document.getElementById("visszajelzes").innerHTML='<h4>Gratulálok, a helyes megoldás:'+' '+adatok0[veletlen].population+' '+'Fő'+'</h4>';
        helyes++;
        document.getElementById("helyes").innerHTML='<h4>Jó tippek: '+'</h4>'+helyes;
        }
    else
    {
        document.getElementById("visszajelzes").innerHTML='<h4>Nem jó, a helyes megoldás:'+' '+adatok0[veletlen].population+' '+'Fő'+'</h4>';
        helytelen++;
        document.getElementById("helytelen").innerHTML='<h4>Rossz tippek: '+'</h4>'+helytelen;
    }
        
    

    
        
}
