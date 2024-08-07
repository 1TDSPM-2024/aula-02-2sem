// let frutas = [
//     "maçã", "pêra", "uva", "laranja", "morango", "melancia", "abacaxi", "banana", "limão", "lichia", "jaca", "mexerica", "melão", "abacate"
// ];

// let novasFrutas = frutas.map( (fruta) => {
//     console.log(fruta);
//     return fruta;
// });

// let objFrutas = frutas.map( (fruta, i, array) => {
//     return {
//         "id": i,
//         "nome": fruta
//     };
// });

// console.log(objFrutas)

// lista = document.querySelector(".teste");

// let frutas = [
//     {"id":1, "nome":"Jaca"},
//     {"id":2, "nome":"Carambola"},
//     {"id":3, "nome":"Zimbro"},
//     {"id":4, "nome":"Mirtilo"},
//     {"id":5, "nome":"Jaca"},
//     {"id":6, "nome":"Pera"},
//     {"id":7, "nome":"Maca"},
// ]

// let precos = [
//     {"id":1, "preco":5.89},
//     {"id":2, "preco":7.56},
//     {"id":3, "preco":10.14},
//     {"id":4, "preco":17.56},
//     {"id":5, "preco":6.33},
// ];

// let precoFrutas = frutas.map( (fruta) => {
//     let preco = precos.find(preco => {preco.id === fruta.id})
//     return {...fruta, preco: preco ? preco.preco : null}
// } )