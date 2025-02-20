const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Escreva um número aleatório: ", (numero)=>{
    let antecessor = (parseInt(numero) - 1);
    let sucessor = (parseInt(numero) + 1);

    console.log(` O sucessor é: ${sucessor} \n O antecessor é: ${antecessor}`);
    rl.close();
})