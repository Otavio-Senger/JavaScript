const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Digite o valor A: ", (valorA) =>{
    rl.question("Digite o valor B: ", (valorB) =>{
        let soma = (parseInt(valorA) + parseInt(valorB));
        console.log(`Soma:  ${soma}`);
        rl.close();
    });
});