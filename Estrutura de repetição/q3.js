let dep = Number(prompt("Digite o valor do depósito em R$"));
let tx = Number(prompt("Digite a taxa de juros da poupança ao mês"));
let sal = dep;
let jur= 0;
for (t=1; t<=24; t++){
    jur = sal * (tx/100);
    sal = sal + jur;
    document.write(`Saldo no ${t}º mês é R$ ${sal.toFixed(2)} <br/>`);
}
let l = sal-dep;
document.write(`Lucro obtido com juros é R$ ${l.toFixed(2)}`);