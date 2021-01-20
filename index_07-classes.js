//CLASSES

// classes são templates de objetos (fabrica de objetos), abaixo como construir uma classe
// cada classe é considerada uma instancia de um objeto,
// podendo ser modificada sem alterar a classe
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
var book2 = new Book('Clarisse L.', 'O lustre');

console.log(book1);
console.log(book2);

//CLASSES + MÉTODO (funções dentro de classes) criando interação

class Filme {
    constructor(roteiro, titulo) {
        this.roteiro = roteiro;
        this.titulo = titulo;
    }
    lingua() {
        console.log("pt-br");
    }
}

// usando a classe criada para criar objetos

var filme1 = new Filme('Carlos Silva', 'A pequena sereia')
console.log(filme1);

// usando o método - nome_do_objeto.nome_do_metodo

filme1.lingua();