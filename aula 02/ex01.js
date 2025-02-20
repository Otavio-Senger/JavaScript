const velocidade = 85;
const multa = (velocidade - 80) * 5;

if (velocidade <= 80) {
    console.log(`Você está dentro da velocidade limite!`);
} else {
    console.log(`Você ultrapassou a velocidade limite e a sua multa é de R$${multa}!`)
}



