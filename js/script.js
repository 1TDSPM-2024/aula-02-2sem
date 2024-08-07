console.log("Olá console")

//Declarando um array de 5 frutas
// let frutas = [
//     "Jaca", "Carambola", "Zimbro", "Mirtilo", "Lichia"
// ];


//Utilizando o map para iterar sonre o array de FRUTAS.

// let novasFrutas = frutas.map((itemDoArray) => {
//     (
//         console.log("MINHAS FRUTAS", itemDoArray)
//     )
//     return itemDoArray
// });

// console.log("Novas Frutas", novasFrutas)


//Transformando o array de frutas em array de obejtos:

// let arrObjFrutas = frutas.map((fruta, indice, array) => {
//     return { "id": indice + 1, "nomeFruta": fruta }
// });

//Imprimindo o array!
// console.log(arrObjFrutas)

//Itegrando array com MAP
let frutas = [
    { "id": 1, "nmFruta": "Jaca" },
    { "id": 2, "nmFruta": "Carambola" },
    { "id": 3, "nmFruta": "Zimbro" },
    { "id": 4, "nmFruta": "Mirtilo" },
    { "id": 5, "nmFruta": "Lichia" }
];

let precos = [
    { "id": 1, "preco": 5.89 },
    { "id": 2, "preco": 7.56 },
    { "id": 3, "preco": 10.14 },
    { "id": 4, "preco": 17.56 },
    { "id": 5, "preco": 6.33 }
];

// let frutasPrecificadas = frutas.map((fruta) => {

//Realizando uma busca no objeto fruta com o objeto precos. (sozinho)
//     let selecionado = precos.find(fruta => fruta.preco >= 10)
//     console.log(`${selecionado.fruta.id} tem o preço de R$${selecionado.preco} `)

// })

let frutasPrecificadas = frutas.map((fruta) => {

    let preco = precos.find(preco => preco.id == fruta.id);
    return { ...fruta, preco: preco ? preco.preco : null }

})

console.log(frutasPrecificadas);