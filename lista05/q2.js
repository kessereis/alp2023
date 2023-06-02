let ano=Number(prompt("Digite um Ano"))
if(ano%4==0 && ano%100){
    document.write(`Esse ano é bissexto`)
}
else{
    document.write(`Esse ano não é bissexto`)
}