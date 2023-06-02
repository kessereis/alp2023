let n1= Number(prompt("Digite um número:"));
let pri= true;
if (n1==2){
    document.write("O número é primo!");
}
else if (n1>2){
    for (let i = 2; i<=(n1/2); i++){
        if (n1%i==0){
            pri = false;
            break;
        }
    }
    if(pri && n1 >= 2){
        document.write("O número é primo!");
    }
    else {
        document.write("O número não é primo!");
    }
}