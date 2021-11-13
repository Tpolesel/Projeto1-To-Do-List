
var el = document.getElementById('tr');
el.addEventListener('click', function(e) {
let valor = e.target;
let idValor = valor.parentNode["id"]
let checkId = valor.attributes["id"].value

valor.addEventListener("change", function(){
    let checkValor = document.getElementById(`${checkId}`).checked;

    if (checkValor == true){
        document.getElementById(`${idValor}`).style.textDecoration = "line-through";
    }
    else{
        document.getElementById(`${idValor}`).style.textDecoration = "none";
    }

}) 

});






