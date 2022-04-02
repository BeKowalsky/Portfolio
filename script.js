const linhaHome = document.querySelector('.linhaHome');

const sobre = document.querySelector('.sobre');
const linhaSobre = document.querySelector('.linhaSobre');
sobre.addEventListener('mouseover', () => {
    linhaSobre.classList.add('linhasHover');
    linhaHome.classList.remove('linhaHome');
    linhaHome.classList.add('linhasMenu');
});

sobre.addEventListener('mouseout', () => {
    linhaSobre.classList.remove('linhasHover');
    linhaHome.classList.add('linhaHome');
    linhaHome.classList.remove('linhasMenu');
});



const contato = document.querySelector('.contato');
const linhaContato = document.querySelector('.linhaContato');
contato.addEventListener('mouseover', () => {
    linhaContato.classList.add('linhasHover');
    linhaHome.classList.remove('linhaHome');
    linhaHome.classList.add('linhasMenu');
});

contato.addEventListener('mouseout', () => {
    linhaContato.classList.remove('linhasHover');
    linhaHome.classList.add('linhaHome');
    linhaHome.classList.remove('linhasMenu');
});


const rodape = document.querySelector('#footer');
const dataAtual = new Date();
const anoAtual = dataAtual.getFullYear();
console.log(anoAtual);

const atualizaRodape = `Copyright ${&copy} Bernardo Kowalsky - ${anoAtual}`;
rodape.innerText = atualizaRodape;
