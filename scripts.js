//1 - var , let e const
var x = 10
var y = 15

if (y > 10) {
    var x = 5
    console.log(x)
}

console.log(x)

let a = 10
let b = 15

if (b > 10) {
    let a = 5
    console.log(a)
}

console.log(a)

// 2 object

let pessoa = {
    nome: 'Jober',
    idade: '43',
    estaAprovado: true,
    sobrenome: 'Costa'
};

console.log (pessoa);

// 3 arrays

let familia = [43,31,16,9,7,5,'jobe',true];
console.log(familia);
console.log(familia.length);

// 4 function (Verbo + Substantivo)
let corSite = "azul"
function resetaCor(cor, tonalidade){
    corSite = cor + tonalidade;
}

console.log('Cor do site: ' + corSite);
resetaCor("Verde ", "claro");
console.log('Cor do site: ' + corSite);

// tipos de função

// realiza uma tarefa mas não devolve nada
function dizerNome(){
    console.log('Jober');
}

dizerNome();

// faz um calculo ou operação e retorna algo
function multiplicarPorDois(valor){
    return valor* 2;
}

//console.log(multiplicarPorDois(5));

let resultado = multiplicarPorDois(5);

console.log(resultado)

// 5 operadores
 
//aritiméticos (matemáticos)
//atribuição
//comparação
//lógicos
//bitwise