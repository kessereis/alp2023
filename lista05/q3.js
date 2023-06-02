let ano=Number(prompt("Digite um ano"))
let sec=Math.floor(ano/100)+1
if(ano%100!=0)(
    document.write(`Esse ano corresponde ao século ${sec}`)
)
else{
    document.write(`erro`)
}