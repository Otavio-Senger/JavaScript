const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Digite a altura da sua parede: ", (altura) =>{
    rl.question("Digite a largua da sua parede: ", (largura)=> {
        let area = (parseFloat(altura) * parseFloat(largura));
        let tinta = area/2;

        console.log(`A área da sua parede é de ${area}m². \nVocê precisa de ${tinta}L de tinta para preencher a parede.`);
    });
});