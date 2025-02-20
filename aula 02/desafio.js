const reta1 = 15;
const reta2 = 10;
const reta3 = 9;

if (reta1 > (reta2 + reta3) || reta2 > (reta1 + reta3) || reta3 > (reta1 + reta2)){
    console.log(`Não pode ser feito um triângulo com esses segmentos!!!`);
}else{
    console.log(`Pode ser formado um triângulo com esses segmentos`);
}