let n1= Number(prompt("Digite um número para conversão em binário:"));
let dec= n1;
let bin = "";
while (dec > 0) {
    bin = (dec % 2) + bin;
    dec= Math.floor(dec / 2);
  }
document.write(`O numero decimal ${n1} em binário é ${bin}`)