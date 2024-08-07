// let frutas = [
//     "Jaca", "Carambola", "Mirtilo", "Zimbro","Lichia"
// ];

// let novasFrutas = frutas.map(function(itemDoArray){
//     console.log("Minhas frutas", itemDoArray);
//     console.log("minha fruta", itemDoArray);
// });      


//simplifica função, apenas uma linha (sem o return)
// let novasFrutas = frutas.map( (itemDoArray)=>{
//     console.log("MINHAS FRUTAS",itemDoArray)
//     return itemDoArray
// });

// console.log("NOVAS FRUTAS",novasFrutas)

// array de frutas => array de objetos
//map cria um outra ""lista"" em cima da outra
// let arrObjFrutas = frutas.map( (fruta,indice,array)=>{
//     return {"id":indice+1,"nomeFruta":fruta};
// });
// console.log(arrObjFrutas);

let frutas = [
    {"id":1, "nm": "Jaca"},
    {"id":2, "nm": "Carambola"},
    {"id":3, "nm": "Zimbro"},
    {"id":4, "nm": "Mirtilo"},
    {"id":5, "nm": "Lichia"},
];

let precos = [
    {"id":1, "preco":5.89},
    {"id":2, "preco":7.56},
    {"id":3, "preco":10.14},
    {"id":4, "preco":17.56},
    {"id":5, "preco": 6.33},
];

let frutasPrecificadas = frutas.map((fruta)=>{
    //Realizando uma busca no objeto fruta com o objeto precos
    let preco = precos.find(preco=> preco.id === fruta.id) 
    return {...fruta, preco:preco ? preco.preco:null}; //forma resumida
    //return {fruta:fruta.id,fruta:nm, preco:preco ? preco.preco:null};
}); 
console.log(frutasPrecificadas);

//Filtar frutas com o preço meor q 7
const frutasAbaixoDoPreco = frutasPrecificadas.filter((fruta)=> fruta.preco <= 7);
console.log(frutasAbaixoDoPreco);



//Exemplo simples de acumulação de valores do array com FOR EACH

let numeros = [1,2,3,4,5];
let acumulado;
// for each usado apenas para leitura
// numeros.forEach((numero)=>{
//     numero += numero;
//     acumulado = numero;
//     console.log((acumulado))

// });

const soma = numeros.reduce((acumulado,valAtual)=>{ 
    return acumulado+valAtual;
});

console.log(soma);