var del = document.getElementById('ul');
del.addEventListener('click', function(e) {
let valor = e.target;
let idValorDel = valor.parentNode["id"];
let checkIdDel = valor.attributes["id"].value;

console.log(`idValorDel = ${idValorDel}`)
console.log(`CheckidDel = ${checkIdDel}`)

if(checkIdDel == `delete${idValorDel}`){
    document.getElementById("model").style.display = "block"
} else{
    document.getElementById("model").style.display = "none"
}

let botaoNao = document.getElementById('nao')

botaoNao.addEventListener("click", function(){
    document.getElementById("model").style.display = "none"
})

})
