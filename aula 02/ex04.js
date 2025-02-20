const nome = "Otávio";
const sexo = "masculino";
const compra = 100;
const descontoFem = compra - ((13/100) * compra);
const descontoMasc = compra - ((5/100) * compra)

if (sexo == "feminino"){
    console.log(`Olá, ${nome}, suas compras deram ${compra}, com o desconto ficou ${descontoFem}`);
}else if (sexo == "masculino"){
    console.log(`Olá, ${nome}, suas compras deram ${compra}, com o desconto ficou ${descontoMasc}`);
}