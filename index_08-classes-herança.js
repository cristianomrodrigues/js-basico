//HERANÇAS DE CLASSES

// CLASSES são templates de objetos (fabrica de objetos), abaixo como
// construir uma classe
// HERANÇA extende propriedade de clases existents,

class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Dog extends Animal { //classe dog herda classe Animal

}

var dog = new Dog ('Pug');
console.log (dog)


