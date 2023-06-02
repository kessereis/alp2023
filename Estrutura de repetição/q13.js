let n1 = Number(prompt("Digite um número:"))
let so = ""
document.write(`n = ${n1} <br/>`)
for (let i=1; i<=n1; i++){
    so = so + " " + i
    document.write(`${so} <br/>`)
}