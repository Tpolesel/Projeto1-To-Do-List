var del = document.getElementById('tr');
del.addEventListener('click', function(e) {
    let linha = e.target
    let itemLinha = e.target.classList
    let indexLinha = linha.parentElement
    
     
    if(itemLinha == 'excluir'){         

            let itemExcluir = prompt("Digite o número da tarefa a ser excluída")
            if(itemExcluir != null){
                meusItens.splice(parseInt(itemExcluir),1)
                console.log(meusItens)
                event.target.parentElement.remove()
                localS.setItem("itens", meusItens)

            }
            else{
                console.log(meusItens)
            }
       
        }else{
        document.getElementById("model").style.display = "none"
    }

})
