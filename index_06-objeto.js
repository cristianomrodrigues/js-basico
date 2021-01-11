//OBJETO + PROPRIEDADES

var roupa = {
    cor: "amarela",
    tamanho: "p",
    moda: "masculina"
};

console.log(roupa);
console.log(roupa.cor);

/************************************************/

var pessoa = {
    peso: 80,
    altura: 170,
    nome: "João",
    idade: 23
};

console.log(pessoa);

//OBJETO + PROPRIEDADES (MÉTODO)

var musica = {
    artista: "Gilberto Gil",
    tocando: function (nomeDaMusica) { //método
        titulo = nomeDaMusica;
        console.log("Ouça agora: " + titulo + " de " + musica.artista);
    }
};

musica.tocando("Não Chores Mais!");
musica.artista = "Caetano Veloso"; // novo valor para musica.artista
musica.tocando("Você é linda!");
