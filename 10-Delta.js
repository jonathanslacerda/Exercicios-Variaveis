let a = 1;
let b = -5;
let c = 6;
const delta = (b * b) - (4 * a * c);

console.log(`O valor de Delta é ${delta}`);

x1 = (- b + Math.sqrt(delta)) / 2 * a;
x2 = (- b - Math.sqrt(delta)) / 2 * a;

console.log(`As duas raízes da equação são ${x1} e ${x2}.`);