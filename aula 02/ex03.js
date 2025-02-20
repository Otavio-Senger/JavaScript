const anoAtual = 2025;
const nascimento = 2003;
const faltam = 18 - (anoAtual - nascimento);
const passaram = (anoAtual - nascimento) - 18;

if (anoAtual - nascimento == 18){
console.log(`Você está no ano do seu alistamento!`);
}else if(anoAtual - nascimento >= 0){
    console.log(`Já se passaram ${passaram} anos do seu alistamento!`);
}else{
    console.log(`Ainda faltam ${faltam} anos para o seu alistamento!`);
}