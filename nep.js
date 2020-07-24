var pudding = document.querySelector(".pudding");

pudding.addEventListener("click",function(){
 document.querySelector(".container") .classList.toggle("show-menu");
});


document.querySelector("#games").addEventListener("change", recountcivilizens)
document.querySelector("#js").addEventListener("change", recountcivilizens)
document.querySelector("#control-sim").addEventListener("change", recountcivilizens)
document.querySelector("#control-nao").addEventListener("change", recountcivilizens)
document.querySelector("#special").addEventListener("change", function(){
    const special = document.querySelector("#special").value
    document.querySelector("label[for=special]").innerHTML = "Special Date:" + special + "Date"
    
    recountcivilizens  
    })


function recountcivilizens(){

const games = document.querySelector("#games").value
const temjs = document.querySelector("#js").checked
const controlyep = document.querySelector("#control-sim").checked
const special = document.querySelector("#special").value
let power = games * 2;
if (temjs)  power = power * 1.2 
if (controlyep) {power = power + 2000}
let sharepower =  special*-0.5;
power = power*sharepower

document.querySelector("#power").innerHTML = "PS:" + power .toFixed(3)
}




