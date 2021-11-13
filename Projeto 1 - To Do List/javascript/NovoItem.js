let botaoAdc = document.getElementById('botaoAdd');

botaoAdc.addEventListener("click",function(){
    let novoItem = document.getElementById('addItem').value  
    if(novoItem){
    criarItem()
}   else{
    window.alert("Preencha alguma atividade para acrescentar na TO DO LIST")
}

setTimeout(function(){
    let salvarItem = document.getElementById('tr').lastChild.innerText
    let codSalvar = document.getElementById('tr').childElementCount.toString()
    localStorage.setItem(codSalvar,salvarItem)
},1000)

})

function criarItem(){
    let novoItem = document.getElementById('addItem').value  

    let novaL = document.querySelector("#tr").childElementCount +1

    let novoId = `l${novaL}`

    let novoInput = document.createElement('input');
    novoInput.id = `checkbox${novoId}`;
    novoInput.type = "checkbox";
    novoInput.name = "check";

    let novaLinha = document.createElement("td");
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

    let minhaTr = document.getElementById('tr');
    minhaTr.appendChild(novaLinha);

    document.getElementById('addItem').value = ""
}

if(localStorage){
    let tamanhoLS = localStorage.length

    for(i=1; i<=tamanhoLS; i++){
        console.log(i)
        let novoItem1 = localStorage[i]

        let novaL1 = document.querySelector("#tr").childElementCount +1
    
        let novoId1 = `l${novaL1}`
    
        let novoInput1 = document.createElement('input');
        novoInput1.id = `checkbox${novoId1}`;
        novoInput1.type = "checkbox";
        novoInput1.name = "check";
    
        let novaLinha1 = document.createElement("td");
        let conteudoLi1 = document.createTextNode(novoItem1);
        novaLinha1.classList.add('linha');
        novaLinha1.id = novoId1;
    
        let deletar1 = document.createElement("img")
        deletar1.src = "./images/deletar-lixeira.png"
        deletar1.alt = "lixo"
        deletar1.classList.add('excluir')
        deletar1.id = `delete${novoId1}`
    
        novaLinha1.appendChild(novoInput1);
        novaLinha1.appendChild(conteudoLi1);
        novaLinha1.appendChild(deletar1);
    
        let minhaTr = document.getElementById('tr');
        minhaTr.appendChild(novaLinha1);
    }
}