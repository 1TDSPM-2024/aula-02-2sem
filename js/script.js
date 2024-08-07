//* Declarando um array de Frutas
let arrFrutas = [
    "Jaca","Carambola","Zimbro", "Mirtilo","Lichia"
];



//* Transformando o array de frutas em array de objetos
//! map é uma função que percore a lista, ela cria uma lista de acordo com os valores retornados
let novasFrutas = arrFrutas.map((itemDoArray,indice,array)=>{
    return {"id":indice+1,"nomeFruta":itemDoArray}
}); //? Parametros(1º - Item do array, 2º - indice do array, 3º - Próprio array)

