 var del = document.getElementById('tr');
del.addEventListener('click', function(e) {
let valor = e.target
let idValorDel = valor.parentNode["id"];
let checkIdDel = valor.attributes["id"].value;
let parente = valor.parentElement;



if(checkIdDel == `delete${idValorDel}`){
    document.getElementById("model").style.display = "block"
} else{
    document.getElementById("model").style.display = "none"
}

let botaoNao = document.getElementById('nao')

botaoNao.addEventListener("click", function(){
    document.getElementById("model").style.display = "none"
    parente = null;

})
let botaoSim = document.getElementById('sim')

botaoSim.addEventListener("click", function(){

    parente.remove()
    document.getElementById("model").style.display = "none" 
    localStorage.removeItem(parente.id.split("")[1])

})


})  

