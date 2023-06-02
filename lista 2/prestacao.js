let valor=Number(prompt("Informe o valor do boleto"))
let juros=Number(prompt("Infome o percentual de juros cobrado"))
let dias=Number(prompt("Informe o número de dias em atraso"))
prestacao=valor + (valor * (juros / 100)) * dias;
document.write(`Valor da prestação ${prestacao}`) 