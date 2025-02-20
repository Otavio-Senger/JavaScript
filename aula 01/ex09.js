const readline = require("readline");

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
});

rl.question("Digite quantos dias voce trabalhou: ", (dias)=>{
    let salario = parseInt(dias)*(8*25);
    console.log(`Você recebe R$${salario} com esses dias trabalhados!`);
    rl.close();
});
