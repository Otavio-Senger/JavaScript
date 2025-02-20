const distanciaApercorrer = 240;
const distaciaMaior = distanciaApercorrer * 0.50;
const distanciaMenor = distanciaApercorrer * 0.45;

if(distanciaApercorrer > 200){
    console.log(`A passagem sairá R$${distaciaMaior}`);
}else{
    console.log(`A passagem sairá R$${distanciaMenor}`);
}