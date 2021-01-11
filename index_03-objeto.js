//Tipos de Referencia - OBJETO

let person = {
    name: 'Paulo',
    age: 30,
    employed: true
}

console.log(person);

//******* Notação com ponto - mais usado *******//
person.age = 45;
console.log(person.age);

//******* Notação em Bracket *******//
person['age'] = 55;
console.log(person.age);

//******* Notação em Bracket *******//
var selecao = 65;
person['age'] = selecao;
console.log(person.age);