let peso=Number(prompt("Digite seu peso"))
let altura=Number(prompt("Digite sua Altura"))
let imc=peso/(altura/100)**2
if(imc<18.5){
    document.write(`Seu imc é de ${imc.toFixed(1)} e Você está abaixo do peso`)
}
else if(imc>=18.5 && imc<=24.9){
    document.write(`Seu imc é de ${imc.toFixed(1)} e Você está com peso normal`)
}
else if(imc>=25 && imc<=29.9){
    document.write(`Seu imc é de ${imc.toFixed(1)} e Você está Acima do peso (sobrepeso)`)
}
else if(imc>=30 && imc<=34.9){
    document.write(`Seu imc é de ${imc.toFixed(1)} e Você está com Obesidade I`)
}
else if(imc>=35 && imc<=39.9){
    document.write(`Seu imc é de ${imc.toFixed(1)} e Você está com Obesidade II`)
}
else{
    document.write(`Seu imc é de ${imc.toFixed(1)} e Você está com Obesidade III`)
}