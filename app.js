const btn1 = document.querySelector('button')
const listafilme = document.querySelector('#listaFilmes')

btn1.addEventListener('click', ()=>{
    const campoUsuario = document.querySelector('#filmeInput').value
    const itemLista = document.createElement('li')
    listafilme.append(itemLista)
    itemLista.innerHTML = `<strong> Este filme é ${campoUsuario}</strong>`
    itemLista.style.background = 'red'
    itemLista.classList.add('ativo')
    itemLista.checkList.toggle('ativo')
})

//window.onload = quando a pagina carregar faça...