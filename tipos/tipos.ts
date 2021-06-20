
//string
let nome: string = 'João'
console.log(nome)

//numer
let idade: number = 27
//idade = 'Ana';
idade = 27.5
console.log(idade);

//boolean
let possuiHobbies: boolean = false
//possuiHobbies = 1
console.log(possuiHobbies)

//tipos explícitos
let minhaIdade: number  //quando não inicalizo a varíavel, ela fica do tipo 
minhaIdade = 27

//minhaIdade = 'idade é 27'

//array
let hobbies: any[] = ['Cozinhar', 'Praticar Esportes']
console.log(hobbies)
//console.log(typeof hobbies)

hobbies = [100,200]
//hobbies = 100
console.log(hobbies)


//tuplas
let endereco: [string, number, string] = ["Av Principal", 99,"Bloco-C"]
console.log(endereco)
endereco = ["Rua Importante", 1260, "Bloco C"]
console.log(endereco)


//Enums
enum Cor{
    Cinza, //0
    Verde, //1
    Azul //2
}

let minhaCor: Cor = Cor.Cinza
console.log(minhaCor)


//any
let carro: any = 'BMW'
console.log(carro)
carro = { marcar: 'BMW', ano:2019}
console.log(carro)
carro = 'Nome'
console.log(carro)


//funções
function retornaMeuNome(): string{
    return nome
}

console.log(retornaMeuNome())

function digaOi():void {
    console.log('oi')
}

digaOi()

function multiplicar(numA: number, numB: number): number {

    return numA * numB
}[]
console.log(multiplicar(2,4.5))

//tipo Função
let calculo = multiplicar
console.log(calculo(5,4))

let multiplicação: (numA: number, numB: number) => number
multiplicação = multiplicar
console.log(multiplicação(4,5))


//tipo Objeto

let usuario: {nome: string, idade:number} = {
    nome: 'Joao',
    idade: 27
}

console.log(usuario)