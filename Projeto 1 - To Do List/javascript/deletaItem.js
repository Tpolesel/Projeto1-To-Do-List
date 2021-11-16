var del = document.getElementById('tr');
del.addEventListener('click', function(e) {
    let linha = e.target
    let itemLinha = e.target.classList
    let deletar = linha.parentElement
    let textoLinha = linha.parentElement.innerText
    let indexLinha = meusItens.indexOf(textoLinha)

    console.log(deletar)
    
    if(itemLinha == 'excluir'){         

            let itemExcluir = prompt(`Para excluir o item ${textoLinha} digite ${indexLinha} `)
            if(itemExcluir != null){
                meusItens.splice(parseInt(itemExcluir),1)
                console.log(meusItens)
                localS.setItem("itens", meusItens)

                if(indexLinha == itemExcluir){
                deletar.remove()
                } else{
                    window.alert("Valor digitado esta incorreto, tente novamente")
                }

            }
            else{
                console.log(meusItens)
            }
       
        }else{
        
    }

})
