let botaoAdc = document.getElementById('botaoAdd');
botaoAdc.addEventListener("click",function(){

let novoItem = document.getElementById('addItem').value  

    if(novoItem){
let novoId = document.querySelector("#ul").childElementCount +1


let novoInput = document.createElement('input');
novoInput.id = `checkbox${novoId}`;
novoInput.type = "checkbox";
novoInput.name = "check";

let novaLinha = document.createElement("li");
let conteudoLi = document.createTextNode(novoItem);
novaLinha.classList.add('linha');
novaLinha.id = novoId;

let deletar = document.createElement("img")
deletar.src = "./images/deletar-lixeira.png"
deletar.alt = "lixo"
deletar.classList.add('excluir')
deletar.id = `delete${novoId}`

novaLinha.appendChild(novoInput);
novaLinha.appendChild(conteudoLi);
novaLinha.appendChild(deletar);

let minhaUl = document.getElementById('ul');
minhaUl.appendChild(novaLinha);

document.getElementById('addItem').value = ""
}else{
    window.alert("Preencha alguma atividade para acrescentar na TO DO LIST")
}
})
/* 
SE ESTIVER VAZIO COLOCAR AVIS0 */