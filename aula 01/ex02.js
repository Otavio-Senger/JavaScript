const readline = require("readline"); //importa o módulo readline

//cria uma interface de leitura para entrada e saida de dados
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

//pedir para que usuário insira o valor e capture o dado
rl.question("Escreva seu nome: ", (nome)=> {
    console.log(`Olá, ${nome}!"`);

    //fecha a interface após a captura de dado
    rl.close();
});