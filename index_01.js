let name;
name = 'Jose';
console.log(name);

//Primitivas ou Tipos de Valor

let nameMan = 'Jose'; // string
let age = 30; // numero
let aproved = false; //booleean
let firstName = undefined; //undefined
let color = null; //null

//Tipos de Referencia - OBJETO

let person = {
    name: 'Paulo',
    age: 30,
    employed: true
}

console.log(person);

// Notação com ponto - mais usado
person.age=45;
console.log(person.age);
// Notação em Bracket
person['age'] = 55;
console.log(person.age);
// Notação em Bracket
var selecao = 65;
person['age'] = selecao;
console.log(person.age);

//Tipos de Referencia - ARRAY

let seletorDeCor = ['red', 'blue'];
console.log(seletorDeCor);
console.log(seletorDeCor[0]); //red
console.log(seletorDeCor[1]); //blue
seletorDeCor[0] = 'green'; // green na posição 0
console.log(seletorDeCor[0]); // green
console.log(typeof seletorDeCor); // arrays são objetos em JS
console.log(seletorDeCor.length); // objeto + propriedade global para contar itens do array

//Tipos de Referencia - FUNCTION

function digaOla() { // sem parametros
    console.log('Olá, como vai!');
}
digaOla();

/************************************************/

function digaOla2(nome) { // com parametro
    console.log('Olá, como vai ' + nome + '');
}
digaOla2('Cristiano');

/************************************************/

function juntarNome() {
    var nome = 'João';
    var sobrenome = 'Mendonça';
    var jun = ''
    return (jun=(nome + ' ' + sobrenome));
}
console.log(juntarNome());

/************************************************/

function palavras (sbstan, adjtivo, verbox) {
    console.log('O ' + sbstan + ' ' + verbox + ' a ' + adjtivo + ' roupa do varal');
}
console.log(palavras('rato', 'velha', 'roeu'));

/************************************************/

//OBJETO + PROPRIEDADES

var roupa = {
cor: 'amarela',
tamanho: 'p',
moda: 'masculina',
}

console.log(roupa);
console.log(roupa.cor);

/************************************************/

var pessoa = {
    peso: 80,
    altura: 170,
    nome: 'João',
    idade: 23
}

console.log(pessoa);

//OBJETO + PROPRIEDADES (MÉTODO)

var musica = {
 artista: 'Gilberto Gil',
 tocando: function (nomeDaMusica) { //método
     titulo = nomeDaMusica;
console.log('Ouça agora: ' + titulo + ' de ' + musica.artista)
 }
}

musica.tocando('Não Chores Mais!')
musica.artista = "Caetano Veloso"; // novo valor para musica.artista
musica.tocando('Você é linda!');

//CLASSES
// classes são templates de objetos (fabrica de objetos), abaixo como construir uma classe
/* 
class Book {
    constructor() {}
}
*/

class Book {
    constructor(autor, titulo) {
        this.autor = autor;
        this.titulo = titulo;
    }
}

// usando a classe criada

var book1 = new Book('Clarisse Lispector', 'Água viva');
var book2 = new Book('Clarisse L.', 'Roda viva');

console.log(book1);
console.log(book2);

//CLASSES + métodos (funções dentro de classes) criando interação

class Filme {
    constructor(roteiro, titulo) {
        this.roteiro = roteiro;
        this.titulo = titulo;
    }
lingua () {
    console.log("pt-br");
}
    }

// usando a classe criada para criar objetso

var filme1 = new Filme('Carlos Silva', 'A pequena sereia')
console.log(filme1);

// usando o método - nome_do_objeto.nome_do_metodo

filme1.lingua();