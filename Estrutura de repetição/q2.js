let n1= Number(prompt("Digite o numero para descobrir seu fatorial:"));
let fat = 1;
for (let i = num; i > 0; i--) {
    fat *= i;
}
document.write(`O fatorial de ${n1} é ${fat}!`)