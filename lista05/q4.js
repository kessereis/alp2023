let A=Number(prompt(`Digite o coefciente "A"`))
let B=Number(prompt(`Digite o coefciente "B"`))
let C=Number(prompt(`Digite o coefciente "C"`))
let delta=B**2-4*A*C
if(delta>0){
   let x1=(-B+Math.sqrt(delta))/(2*A)
   let x2=(-B-Math.sqrt(delta))/(2*A)
   document.write(`As Raízes são ${x1} e ${x2}`)
}
else if(delta==0){
   let x=(-B)/(2*A)
    document.write(`A raíz é ${x}`)
}
else{
    document.write(`Não existem raízes reais para a equação`)
}