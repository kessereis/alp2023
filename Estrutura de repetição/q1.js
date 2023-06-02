n1= Number(prompt("Digite um número para exibir a tabuada:"));
for(i=0; i<=10; i++){
    let m = n * i;
    document.write(`${n1} x ${i} = ${m} <br/>`);
}