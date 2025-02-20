const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Escreva o quanto você tem na carteira em Reais: ", (reais) =>{
    let dolar = parseFloat(reais)*5.60;
    console.log(`Você tem U$${dolar}`);
    rl.close();
});