
const imagensContainer = document.querySelector(".imagens");
const imagens = document.querySelectorAll(".imagens img");
const totalImagens = imagens.length;

let indiceAtual = 0;

function avancarCarrossel(){
    indiceAtual = (indiceAtual + 1) % totalImagens;

    const larguraImagem = imagens[0].clientWidth;

    //(translateX) desloca na horizontal ($) junta o número com o texto (-) para ir para esquerda (`) tem que estar entre crase.
    imagensContainer.style.transform = `translateX(-${indiceAtual * larguraImagem}px)`;

}

setInterval(avancarCarrossel, 4000)


// ----------Accordion--------

document.querySelectorAll(".titulo").forEach(titulo =>{
    titulo.addEventListener("click", ()=>{
        const conteudo = titulo.nextElementSibling; //Encontra próximo elemento irmão (conteúdo associado ao título).

        document.querySelectorAll(".conteudo").forEach(c =>{
            if(c !== conteudo){ // (!==) Não igual 
                c.style.maxHeight = null;
            }
        });

        if(conteudo.style.maxHeight){
            conteudo.style.maxHeight = null;
        } else{
            conteudo.style.maxHeight = conteudo.scrollHeight + "px"
        }


    })
}) 