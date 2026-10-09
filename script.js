// SITE

// Efeito de brilho

const body = document.body;

body.addEventListener("mousemove", function (event){
    const x = event.clientX;
    const y = event.clientY;

    body.style.setProperty("--mouse-x-cor", x + "px");
    body.style.setProperty("--mouse-y-cor", y + "px");
});

// Borda nos card

const cards = document.querySelectorAll(".card-borda");

cards.forEach(function (card) {
    
    card.addEventListener("mousemove", function (event) {
        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        card.style.setProperty("--mouse-x", x + "px");
        card.style.setProperty("--mouse-y", y + "px");
    });

    card.addEventListener("mouseleave", function () {
        card.style.setProperty("--mouse-x", "-500px");
        card.style.setProperty("--mouse-y", "-500px");
    });

});






// HEADER

// Letras vermelhas

const links = document.querySelectorAll("header nav a");

links.forEach(function (link){

    link.addEventListener("click", function () {
        links.forEach(function (link){
            link.classList.remove("red");
        });

        link.classList.add("red");
        });
});

// triangulo pequenininho

const itensMenu = document.querySelectorAll('nav ul li');
const triangulo = document.querySelector('#triangulo');

itensMenu.forEach((li) => {
  li.addEventListener('click', () => {
    const liLeft = li.offsetLeft;

    const liWidth = li.offsetWidth;

    const meioDoLi = liLeft + (liWidth / 2);

    triangulo.style.setProperty("--x-da-triangulo", meioDoLi + "px");
  });
});

// Botão de claro e escuro

const botaoTema = document.getElementById("botaoTema");

botaoTema.addEventListener("click", function (){
body.classList.toggle("white");
});





// INICIO

const textoExplosivo = document.querySelector("#texto-explosivo");
const palavrasExplosivas = ["CÓDIGO EM EVOLUÇÃO.", "IDEIAS FORA DE ÓRBITA.", "CRIATIVIDADE EM AÇÃO."];

const numeroMinusculo = document.querySelector("#numero-minusculo");
const numerosMinusculos = ["01", "02", "03"];

const linhaVermelha = document.querySelector("#textos-animados hr")

let indice = 0;

setInterval(function(){

    setTimeout(function(){
        textoExplosivo.classList.add("opacity");
    }, 4000)
    textoExplosivo.textContent = palavrasExplosivas[indice];
    textoExplosivo.classList.remove("opacity");


    numeroMinusculo.textContent = numerosMinusculos[indice];


    linhaVermelha.classList.add("tres-cinco-zero");
    setTimeout(function () {
        linhaVermelha.classList.remove("tres-cinco-zero");
    }, 1500);


    indice++;

    if(indice === palavrasExplosivas.length){
        indice = 0;
    }
}, 5000);







// SOBRE

// SOBRE



const pastasHabilidades = document.querySelectorAll(".pasta-habilidade");
const listasHabilidades = document.querySelectorAll(".lista-habilidades");
const documentosHabilidades = document.querySelectorAll(".documento-habilidade");

const nomePastaAberta = document.querySelector("#nome-pasta-aberta span");
const caminhoPasta = document.querySelector("#caminho-pasta");
const caminhoArquivo = document.querySelector("#caminho-arquivo");
const numeroDocumento = document.querySelector("#numero-documento");
const totalDocumentos = document.querySelector("#total-documentos");


pastasHabilidades.forEach(function (pasta){
    pasta.addEventListener("click", function () {
        pastasHabilidades.forEach(function (pasta){
            pasta.classList.remove("pasta-selecionada");
            pasta.setAttribute("aria-pressed", "false");
            pasta.querySelector(".abrir-pasta").textContent = "ABRIR →";
        });

        pasta.classList.add("pasta-selecionada");
        pasta.setAttribute("aria-pressed", "true");
        pasta.querySelector(".abrir-pasta").textContent = "ABERTA →";

        listasHabilidades.forEach(function (lista){
            lista.classList.remove("lista-aberta");
        });

        const listaAberta = document.querySelector("#lista-" + pasta.value);
        listaAberta.classList.add("lista-aberta");

        nomePastaAberta.textContent = pasta.querySelector(".nome-pasta").textContent;
        caminhoPasta.textContent = pasta.value;

        listaAberta.querySelector(".arquivo-habilidade").click();
    });
});


listasHabilidades.forEach(function (lista){
    const arquivos = lista.querySelectorAll(".arquivo-habilidade");

    arquivos.forEach(function (arquivo, numero){
        arquivo.addEventListener("click", function () {
            const todosArquivos = document.querySelectorAll(".arquivo-habilidade");

            todosArquivos.forEach(function (arquivo){
                arquivo.classList.remove("arquivo-selecionado");
                arquivo.setAttribute("aria-pressed", "false");
            });

            arquivo.classList.add("arquivo-selecionado");
            arquivo.setAttribute("aria-pressed", "true");

            documentosHabilidades.forEach(function (documento){
                documento.classList.remove("documento-aberto");
            });

            const documentoAberto = document.querySelector("#documento-" + arquivo.value);
            documentoAberto.classList.add("documento-aberto");

            caminhoArquivo.textContent = arquivo.value;
            numeroDocumento.textContent = "0" + (numero + 1);
            totalDocumentos.textContent = "0" + arquivos.length;
        });
    });
});
