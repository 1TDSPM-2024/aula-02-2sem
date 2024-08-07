// MAP, FIND, FILTER, REDUCE

const frutas = ["Jaca", "Carambola", "Zimbro", "Mirtilo", "Lichia"];

// .map(function(item))
let frutasMaiusculas = frutas.map((fruta) => {
    let retorno = fruta.toUpperCase();
    return retorno;
})
console.log(frutasMaiusculas);


console.log("--------------------------");


// .map(function(item, indice, array))
let objetosFrutas = frutas.map((fruta, indice) => {
    return { "id": indice + 1, "nomeFruta": fruta };
})
console.log(objetosFrutas);


console.log("--------------------------");


// integrando arrays com map e find
let frutas2 = [
    { "id": 1, "nomeFruta": 'Jaca' },
    { "id": 2, "nomeFruta": 'Carambola' },
    { "id": 3, "nomeFruta": 'Zimbro' },
    { "id": 4, "nomeFruta": 'Mirtilo' },
    { "id": 5, "nomeFruta": 'Lichia' }
];

let precos = [
    { "id": 1, "preco": 5.89 },
    { "id": 2, "preco": 7.56 },
    { "id": 3, "preco": 10.14 },
    { "id": 4, "preco": 17.56 },
    { "id": 5, "preco": 6.33 }
];

// aqui uso MAP e FIND
let frutasPrecificadas = frutas2.map((fruta) => {
    // acha o obj de precos que tem o id igual o id da fruta
    let preco = precos.find(itemPreco => itemPreco.id == fruta.id);

    // retorna o preço se ele existir, se não, 0
    return { ...fruta, preco: preco ? preco.preco : 0 };
});
console.log(frutasPrecificadas);

console.log("--------------------------");

// aqui uso FILTER
let frutasAbaixoPreco = frutasPrecificadas.filter((fruta) => fruta.preco <= 7);
console.log(frutasAbaixoPreco);

console.log("--------------------------");


const numeros = [1, 2, 3, 4, 5];

let soma = numeros.reduce((acumulador, numeroAtual) => {
    return acumulador + numeroAtual;
});

console.log(soma);
