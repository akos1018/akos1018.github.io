function kereses(){
    fetch("https://covid.ourworldindata.org/data/owid-covid-data.json")
    .then(x => x.json())
    .then(y => megjelenit(y));
}



function megjelenit(adatok){

    console.log(adatok);

    var orszag=document.getElementById("orszag").value;
    var sz='<table class="table table-striped" style="width:80%; text-align:center">';
    sz+='<tr>';
    sz+='<th colspan="2" style="text-transform:uppercase">'+adatok[orszag].location+'</th>';
    sz+='</tr>';
    sz+='<tr>';
    sz+='<th>'+'Dátum'+'</th>';
    sz+='<th>'+'Összes eset'+'</th>';
    sz+='</tr>';

    for (elem of adatok[orszag].data){
        sz+='<tr>';
        sz+='<td>'+elem.date+'</td>';  
        sz+='<td>'+elem.total_cases+'</td>'
        sz+='</tr>';
           
    }
    
    
    
    document.getElementById("talalat").innerHTML=sz;
 

}
