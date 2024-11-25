document.querySelector("button").addEventListener("click",disply);
let res;
async function disply(){
try{
    var userip = document.getElementById("writeHere").value;
    var fpass = await fetch(`https://api.tvmaze.com/search/shows?q=${userip}`);
     res = await fpass.json();
    console.log(res);
    CardsRack();

}catch(error){

}

}

var mainD = document.getElementById("maindisply");
var contain = document.createElement("div");
contain.className = "container";
var row = document.createElement("div");
row.className="row";

function CardsRack(){
    for(var i = 0;i<res.length;i++){
        var col = document.createElement("div");
        col.className="col-lg-4 col-sm-12";
        col.innerHTML = `<div class="card-deck">
  <div class="card">
    <img src="${res[i].show.image.original}" class="card-img-top" alt="movie image">
    <div class="card-body">
      <h5 class="card-title">Movie Name: ${res[i].show.name}</h5>
      <p class="card-text"><b>Discribtion:</b> ${res[i].show.summary}</p>
      <p class="card-text"><b>runTime:</b> ${res[i].show.runtime}<b>mins</b></p>
    </div>
  </div>`;
  row.append(col);
contain.append(row);
mainD.append(contain);


    }

    
}