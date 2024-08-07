
//Declarando um array com 5 frutas.
// let frutas = [
//     "Jaca","Carambola","Zimbro","Mirtilo","Lichia"


//Declarando um array com 5 frutas
// let frutas = [
//     "Jaca", "Carambola", "Zimbro", "Mirtilo", "Lichia"

// ];

//Utilizando o map para iterar sobre o array de FRUTAS.

// let novasFrutas = frutas.map( (itemDoArray)=>{
//     console.log("MINHAS FRUTAS",itemDoArray)
//     return itemDoArray
// });

// console.log("NOVAS FRUTAS",novasFrutas)

//Transformando o array de frutas em array de objetos:


// let arrObjFrutas = frutas.map( (fruta,indice,array)=>{
//     return { "id":indice+1,"nomeFruta":fruta};
// });

// //Imprimindo o novo array!
// console.log(arrObjFrutas);

//Integrando arrays com MAP
let frutas = [
    {"id":1, "nmFruta":"Jaca"},
    {"id":2, "nmFruta":"Carambola"},
    {"id":3, "nmFruta":"Zimbro"},
    {"id":4, "nmFruta":"Mirtilo"},
    {"id":5, "nmFruta":"Lichia"},
];

let precos = [
    {"id":1, "preco":5.89},
    {"id":2, "preco":7.56},
    {"id":3, "preco":10.14},
    {"id":4, "preco":17.56},
    {"id":5, "preco":6.33},
];

let frutasPrecificadas = frutas.map((fruta)=>{
    //Realizando uma busca no objeto fruta com o objeto precos.
    let preco = precos.find(preco=> preco.id === fruta.id);
    return {...fruta, preco:preco ? preco.preco:null};
    //return {fruta:fruta.id,fruta:fruta.nmFruta, preco:preco ? preco.preco:null};
})

// let arrObjFrutas = frutas.map((fruta, indice, array) => {
//     return { "id": indice + 1, "nomeFruta": fruta };

// });

// Imprimindo o novo array:
// console.log(arrObjFrutas);

//Integrando arrays com MAP:

let frutas = [
    { "id": 1, "nmFruta": "Jaca" },
    { "id": 2, "nmFruta": "Carambola" },
    { "id": 3, "nmFruta": "Zimbro" },
    { "id": 4, "nmFruta": "Mirtilo" },
    { "id": 5, "nmFruta": "Lichia" },
];

let precos = [
    { "id": 1, "preco": 5.89 },
    { "id": 2, "preco": 7.56 },
    { "id": 3, "preco": 10.14 },
    { "id": 4, "preco": 17.56 },
    { "id": 5, "preco": 6.33 },
];

let frutasPrecificadas = frutas.map((fruta) => {

    //    REALIZANDO UMA BUSCA NO OBJETO FRUTA COM O OBJETO PRECOS.
    let preco = precos.find(preco => preco.id === fruta.id);
    return { ...fruta, preco: preco ? preco.preco : null };
    //return { fruta: fruta.id, fruta: fruta.nmFruta, preco: preco ? preco.preco : null };
});

// }).filter() ;

console.log(frutasPrecificadas);

//Filtrar as frutas com preço menor que 7;

const frutasAbaixoDoPreco = frutasPrecificadas.filter((fruta)=> fruta.preco <= 7);
console.log(frutasAbaixoDoPreco);

//Exemplo simples de acumulação de valores do array com FOR EACH

// let numeros = [1,2,3,4,5];

const frutasAbaixoDoPreco = frutasPrecificadas.filter((fruta) => fruta.preco <= 7);
console.log(frutasAbaixoDoPreco);

//let numeros = [1,2,3,4,5];

// numeros.forEach( (numero)=> {
//     numero += numero;
//     acumulado = numero;
//     console.log(acumulado);
// });

// for (let x = 0; x < numeros.length; ++x) {
//     numeros[x] += numeros[x];
//     acumulado = numeros[x];
// }

// console.log(acumulado);

// const soma = numeros.reduce((acumulado,valAtual)=>{ 
//     return acumulado+valAtual;
// });

// console.log(soma);

//REDUCE
// let numeros = [1,2,3,4,5];

// const soma = numeros.reduce((acumulado,valAtual)=>{
//     return acumulado+valAtual;
// });


