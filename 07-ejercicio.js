///  Calcule la suma de números impares mayores que 10 y menores que 30

const ejercicio7 = ()=>{
    let a = 0;
    for (let i = 11; i <=30; i++) {      
        if (i %2 !==0){       
            a+=i
            console.log(a)
        } 
    }
}
ejercicio7()