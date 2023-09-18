let ax = 3;
let ay = 5;
let bx = 6;
let by = 1;

const distancia = (bx - ax) ^ 2 + (by - ay) ^ 2;
Math.sqrt(distancia);
console.log(`A distância entre os pontos A(${ax},${ay}) e B(${bx},${by}) é ${distancia}`);