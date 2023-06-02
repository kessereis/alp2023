let valor=Number(prompt("Digite o valor do produto"))
desconto=valor * 30 / 100
valor_pago=valor-desconto
document.write(`valor do desconto ${desconto} e valor a ser pago ${valor_pago}`)