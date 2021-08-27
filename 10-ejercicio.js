/// Calcule el promedio de los números en una matriz (array) de números.

const promedio = ()=>{
    let suma = 0
    let numeros = [1,2,3,4,5].length
    for (let i = 0; i <= numeros; i++) { 
        suma+=i;
    }
    console.log(suma/numeros)
}
promedio()