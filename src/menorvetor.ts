function encontrarMenorNumero(a=[]){
 let menor = a[0]
 for(let i =1;i<a.length;i++){
    if(a[i]<menor){
        menor = a[1]
    }
    return menor
 }
 
}
export {encontrarMenorNumero}