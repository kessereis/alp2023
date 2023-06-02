let la=Number(prompt("Digite o 1° lado "))
let lb=Number(prompt("Digite o 2° lado "))
let lc=Number(prompt("Digite o 3° lado "))
if(la==lb && lb==lc){
    document.write(`Essse triângulo é Equilátero pois os seus 3 lados são iguais`)
}
else if(la!=lb && lb!=lc && la!=lc){
   document.write(`Essse triângulo é Escaleno pois todos os lados são diferentes`)
}
else{
   document.write(`Essse triângulo é Isóseles pois somente 2 lados são iguais`)
}