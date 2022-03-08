let minhaImagem = document.querySelector('img');
let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');

minhaImagem.onclick = function() {
    let meuSrc = minhaImagem.getAttribute('src');
    if(meuSrc === 'img/momonga.png') {
        minhaImagem.setAttribute('src', 'img/ainz.png');
    } else {
        minhaImagem.setAttribute('src', 'img/momonga.png');
    }
}

function defineNomeUsuario() {
    let meuNome = prompt('Por favor, digite seu nome.');
    if(!meuNome || meuNome === null) {
        defineNomeUsuario();
    } else {
        localStorage.setItem('nome', meuNome);
        meuCabecalho.textContent = `Bem vindo ao meu domínio, ${meuNome}`;
    }

    if(!localStorage.getItem('nome')) {
        defineNomeUsuario();
    } else {
        let nomeGuardado = localStorage.getItem('nome');
        meuCabecalho.textContent = `Bem vindo ao meu domínio, ${nomeGuardado}`;
    }
}

meuBotao.onclick = () => {
    defineNomeUsuario();
}