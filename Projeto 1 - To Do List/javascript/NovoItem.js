//Adicionar items na lista e na LocalStorage
let meusItens = [];
let localS = localStorage
let botaoAdc = document.getElementById('botaoAdd');
botaoAdc.addEventListener("click",function(){
    let novoItem = document.getElementById('addItem').value  
    if(novoItem){
    criarItem()
}   else{
    window.alert("Preencha alguma atividade para acrescentar na TO DO LIST")
}
    localS.setItem("itens", meusItens)
    console.log(meusItens)
})

// Função para Criar Elemento
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
    meusItens.push(novoItem)
    
}

// Carregando Itens da LocalStorage na abertura da página
meusItens = Object.values(localStorage)[0].split(',')
console.log(meusItens)
if(meusItens[0] == ""){
    localStorage.clear()
}
 if(meusItens.length > 0 && meusItens[0] != "" ){
    let tamanho = meusItens.length
    for(i=0; i<tamanho; i++){
        let novoItem = meusItens[i]
        console.log(novoItem)
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
    }
}