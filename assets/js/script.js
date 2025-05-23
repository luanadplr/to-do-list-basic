/*

    Pegar o input digitado (value)
    Verificar a tecla digitada (ENTER) e criar uma função para enviar o value assim que essa tecla for "desarpetada" = keyup
    Criar um novo li com o value digitado // Alterar o P do LI com o value

    ---/---

    Fazer o botão de riscar, riscar a palavra e mudar a cor para verde.
    Fazer o botão de lixo excluir o li.

*/

let inputTarefa = document.querySelector('#inputTarefa')
const ul = document.querySelector('ul')

const adicionarLi = () =>{

    const newLi = document.createElement('li')

    newLi.innerHTML = `
                <div>
                <button><i class="fa-solid fa-circle-check i__check"></i></button>
                <p class="p__tarefa">${inputTarefa.value}</p>
                </div>
                <button class="trash"><i class="fa-solid fa-trash i__trash"></i></button>
    `

    // Inserir o novo li na lista recebendo o value do input
    ul.appendChild(newLi)
    inputTarefa.value = ""

    // Riscar o elemento quando ele for concluído
    const btnRiscar = newLi.querySelector('.i__check')
    btnRiscar.addEventListener('click', ()=>{
        const p = newLi.querySelector('.p__tarefa')
        p.classList.toggle('isChecked')
        p.classList.contains('isChecked') ? btnRiscar.style.color = '#b8b8b8' : btnRiscar.style.color = '#ff9aa2'
    })

    // Apagar o elemento com o ícone trash
    const btnApagar = newLi.querySelector('.i__trash')
    btnApagar.addEventListener('click', ()=>{
        ul.removeChild(newLi)
    })

    // Mostrar o botão de "Limpar Lista"
    btnLimpar.style.display = 'block'

}

// Verificar se o 'Enter' foi apertado
document.addEventListener('keyup', (event)=>{
    if(event.key === 'Enter' && inputTarefa.value != ""){
        adicionarLi()
    }
})

// Limpar lista
const btnLimpar = document.querySelector('.btn__limpar')
btnLimpar.addEventListener('click', ()=>{
        ul.innerHTML = ''
        btnLimpar.style.display = 'none'
})