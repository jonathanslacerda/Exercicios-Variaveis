const meuDinheiro = 80;
const valorTenis = 129.99;
const valorDesconto = valorTenis - meuDinheiro;
const percentualDesconto = (valorDesconto * 100) / valorTenis;

console.log(`O valor de desconto é de ${percentualDesconto}%`);