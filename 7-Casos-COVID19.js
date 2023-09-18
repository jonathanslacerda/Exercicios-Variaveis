let populacao = 1000000;
let transmissao = 4;
let tempo = 365;

pessoasInfectadas = populacao * transmissao ^ tempo;

console.log(`O número de pessoas infectadas em ${tempo} dias, é de ${pessoasInfectadas} pessoas!`);
