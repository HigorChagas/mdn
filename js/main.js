let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function() {
    let meuSrc = minhaImagem.getAttribute('src');
    if(meuSrc === 'img/momonga.png') {
        minhaImagem.setAttribute('src', 'img/ainz.png');
    } else {
        minhaImagem.setAttribute('src', 'img/momonga.png');
    }
}