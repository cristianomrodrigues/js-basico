//Tipos de Referencia - FUNCTION

function digaOla() { // sem parametros
    console.log('01: ' + 'Olá, como vai!');
}
digaOla();

/************************************************/

function digaOla2(nome) { // com parametro
    console.log('02: ' + 'Olá, como vai ' + nome + '');
}
digaOla2('Cristiano');

/************************************************/

function juntarNome() {
    var nome = 'João';
    var sobrenome = 'Mendonça';
    var jun = ''
    return (jun=(nome + ' ' + sobrenome));
}
console.log('03: ' + juntarNome());

/************************************************/

function palavras (sbstan, adjtivo, verbox) {
    console.log('O ' + sbstan + ' ' + verbox + ' a ' + adjtivo + ' roupa do varal');
}
console.log(palavras('rato', 'velha', 'roeu'));