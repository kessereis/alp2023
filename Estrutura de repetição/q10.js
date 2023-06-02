alert(`Digite quantas temperaturas desejar! Para encerrar a leitura digite "0"!`);
let maxTe = null;
let minTe = null;
let sTem = 0;
let qTem = 0;
for(;;){
    tempo = Number(prompt(`Digite uma temperatura`));
    if (tempo!=0){
        sTem += tempo;
        qTem++;
        document.write(tempo + "<br/>");
        if (tempo>maxTe){
            maxTe = tempo;
        }
        if (tempo<minTe){
            minTe = tempo;
        }
    }
    else {
        break;
    }
}
document.write(`Maior temperatura informada: ${maxTe}°<br/>`);
document.write(`Menor temperatura informada: ${minTe}°<br/>`);
document.write(`A média das temperaturas apresentadas é: ${sTem/qTem.toFixed(2)}`);