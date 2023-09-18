const capital = 1000;
const juros = 12;
const taxaJuros = juros / 100;
const tempo = 7;
const jurosCompostos = capital * (1 + taxaJuros) ^ tempo;

console.log(`O capital acumulado em ${tempo} meses é de R$ ${jurosCompostos}`);
