const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Digite seu salário atual: ", (salario)=>{
    let aumento = (15/100) * parseFloat(salario);
    let comAumento = aumento + parseFloat(salario);
    console.log(`Seu salário agora é de R$${comAumento}!`);
    rl.close();
});