//* Declarando um array de Frutas
let arrFrutas = [
    "Jaca","Carambola","Zimbro", "Mirtilo","Lichia"
];



//* Transformando o array de frutas em array de objetos
//! map é uma função que percore a lista, ela cria uma lista de acordo com os valores retornados
let novasFrutas = arrFrutas.map((itemDoArray,indice,array)=>{
    return {"id":indice+1,"nomeFruta":itemDoArray}
}); //? Parametros(1º - Item do array, 2º - indice do array, 3º - Próprio array)

//* Utilizando a função Map
let objFrutas = [
    {"id":1,"nmFruta":"Jaca"},
    {"id":2,"nmFruta":"Carambola"},
    {"id":3,"nmFruta":"Zimbro"},
    {"id":4,"nmFruta":"Mirtilo"},
    {"id":5,"nmFruta":"Lichia"},
]

let objPrecos = [
    {"id":1,"precos":5.89},
    {"id":2,"precos":7.56},
    {"id":3,"precos":10.14},
    {"id":4,"precos":17.56},
    {"id":5,"precos":6.33},
]

let frutasPrecificadas = objFrutas.map((frutinhas)=>{
    
    let objCerto = objPrecos.find(verificar => verificar.id === frutinhas.id)
    return {...frutinhas, objCerto:precos ? objCerto.precos:null};//! Isso se chama Spreach
    //? A primeira primeira parte do Spreach já pega o objeto que já está sendo passado
    //? a segunda parte faz uma verificação e retorna o valor null caso a verificação esteja errada
});