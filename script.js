import {categorias, lojas} from './database.js'

let txtBusca = document.querySelector('#ipBusca');
let subBusca = document.querySelector('#btBusca');
let blockLojas = document.querySelector('#lojas');

let objCat; // (Object Category) Categoria retornada que se encaixa a pesquisa.
let objLeng; // (Object Length) Quantidade de objetos retornados. Usado para fazer a repetição da criação de elementos.
let objSrc; // (Object Search) Objetos retornados. Usado para ser manipulado globalmente.
let arrImg; // (Array Images) Array onde é armazenado o caminho das imagens. Usando arrImg[i] consigo extrair a imagem ordenadamente.

subBusca.addEventListener('click', buscar)
function buscar() {
    blockLojas.innerHTML = "";
    let valSrc = txtBusca.value;
    nav(valSrc); // "valSrc" vai receber o que foi escrito na barra de pesquisa e será usado como parametro para a função "nav".
    bloco();
    txtBusca.value = "";
}

const nav = (pesquisa) => { // "pesquisa" se refere a variável "valSrc". (O que foi digitado na barra de pesquisa).
    categorias.forEach((pesq, index) => { // Varredura por todos os objetos do Array "categorias". "index" é sua posição dentro do array.
        pesq.userBusca.find((final) => { // Entrei no array "userBusca" do objeto "categorias".
            if(pesquisa == final){ // Comparei o valor digitado com cada valor do Array "userBusca".
                objCat = categorias[index]; // Objeto da categoria que se encaixa a pesquisa.
            }
        })
    })
    objSrc = lojas.filter((categId) => categId.catId == objCat.id); // Comparação do "ID" da loja com o "ID" da categoria.
    arrImg = objSrc.map((imgMap) => imgMap.imagem); // Novo array que irá armazenar o caminho das imagens.
    objLeng = objSrc.length;
}

const bloco = () => {
    for(let i=0;i < objLeng;i++){
        createElement('div', {class: 'loja', id: 'blockLoja'}, blockLojas); // Bloco de cada comercio.
        let divLoja = document.querySelectorAll('#blockLoja');

        createElement('div', {class: 'blcImg', id: 'blcImg'}, divLoja[i]); // Imagem.
        let divImg = document.querySelectorAll('#blcImg');
        createElement('img', {src: arrImg[i]}, divImg[i]);

        createElement('div', {class: 'infoLoja', id: 'infoLojaJS'}, divLoja[i]); // Nome e mais informações.
        let divInfos = document.querySelectorAll('#infoLojaJS');;
        createElement('h3', {id: 'nomeLoja'}, divInfos[i]);
        let hNLoja = document.querySelectorAll('#nomeLoja');
        hNLoja[i].innerHTML = objSrc[i].name;
        createElement('p', {id: 'endLoja'}, divInfos[i]);
        let pLoja = document.querySelectorAll('#endLoja');
        pLoja[i].innerHTML = objSrc[i].endereco;
        createElement('p', {id: 'bLoja'}, divInfos[i]);
        let brrLoja = document.querySelectorAll('#bLoja');
        brrLoja[i].innerHTML = objSrc[i].bairro;
    }
}

const createElement = (elmName, attrs, local) => {
    let element = document.createElement(elmName);
    let attribute = Object.entries(attrs);
    attribute.forEach(([key, value]) => {
        element.setAttribute(key, value);
        local.appendChild(element);
    })
}