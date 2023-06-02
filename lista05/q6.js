let centx = Number(prompt("Digite a coordenada x do centro do círculo"))
let centy = Number(prompt("Digite a coordenada y do centro do círculo"))
let raio = Number("Digite o raio do círculo")
let p1 = Number(prompt("Digite a coordenada ponto do x:"))
let p2 = Number(prompt("Digite a coordenada ponto do y:"))
let dist = Math.sqrt((p1-centx) ** 2 + (p2-centy) **2)
if (dist <=raio){
    document.write(`O ponto está dentro do círculo.`)
}
else{
    document.write(`O ponto está fora do círculo.`)
}