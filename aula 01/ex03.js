const readline = require("readline") //importa o módulo readline

//cria uma interface de leitura para entrada e saida de dados
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Nome: ", (nome)=> {
    rl.question("Salário: ", (salario)=>{
        console.log(`O funcionário ${nome} recebe ${salario}!`);

        rl.close();

    });
});