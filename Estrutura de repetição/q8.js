alert(`Digite quantas idades desejar! Para encerrar a leitura digite "0"!`);
let idade;
let soidade = 0;
let quant_idade = 0;
document.write(`Idades informadas:<br/>`);
for (;;){
    idade = Number(prompt("Digite uma idade:"));
    if (idade !== 0){
        if(idade>=18){
            soidade+=idade;
            quant_idade++;
        }
    }
    else{
        break;
    }
    document.write(`${idade} <br/>`)
}
document.write("<p>");
let media_idades = soidade/quant_idade;
document.write(`Soma das pessoas maiores de idade: ${soidade} <br/>`);
document.write(`Média das pessoas maiores de idade: ${media_idades.toFixed(2)}`);