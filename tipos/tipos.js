"use strict";
//string
var nome = 'João';
console.log(nome);
//numer
var idade = 27;
//idade = 'Ana';
idade = 27.5;
console.log(idade);
//boolean
var possuiHobbies = false;
//possuiHobbies = 1
console.log(possuiHobbies);
//tipos explícitos
var minhaIdade; //quando não inicalizo a varíavel, ela fica do tipo 
minhaIdade = 27;
//minhaIdade = 'idade é 27'
//array
var hobbies = ['Cozinhar', 'Praticar Esportes'];
console.log(hobbies);
//console.log(typeof hobbies)
hobbies = [100, 200];
//hobbies = 100
console.log(hobbies);
//tuplas
var endereco = ["Av Principal", 99, "Bloco-C"];
console.log(endereco);
endereco = ["Rua Importante", 1260, "Bloco C"];
console.log(endereco);
//Enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul"; //2
})(Cor || (Cor = {}));
var minhaCor = Cor.Cinza;
console.log(minhaCor);
//any
var carro = 'BMW';
console.log(carro);
carro = { marcar: 'BMW', ano: 2019 };
console.log(carro);
carro = 'Nome';
console.log(carro);
//funções
function retornaMeuNome() {
    return nome;
}
console.log(retornaMeuNome());
function digaOi() {
    console.log('oi');
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
[];
console.log(multiplicar(2, 4.5));
//tipo Função
var calculo = multiplicar;
console.log(calculo(5, 4));
var multiplicação;
multiplicação = multiplicar;
console.log(multiplicação(4, 5));
//tipo Objeto
var usuario = {
    nome: 'Joao',
    idade: 27
};
console.log(usuario);
