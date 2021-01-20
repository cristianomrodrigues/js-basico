//HERANÇAS DE CLASSES

// CLASSES são templates de objetos (fábrica de objetos), abaixo como
// construir uma classe
// HERANÇA extende propriedade de clases existente,

class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Dog extends Animal { //classe dog herda classe Animal

}

var dog = new Dog('Pug');
console.log(dog)


