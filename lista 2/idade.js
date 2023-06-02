let anos=Number(prompt("Sua idade em anos"))
let meses=Number(prompt("Sua idade em meses"))
let dias=Number(prompt("Sua idade em dias"))
idade_dias=anos * 365 + meses * 30 + dias
document.write(`Total da idade em dias ${idade_dias}`)