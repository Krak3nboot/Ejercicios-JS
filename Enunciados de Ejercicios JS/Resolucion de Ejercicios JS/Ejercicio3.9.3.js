'use strict'


/*Escribir una función que, dados cuatro números, devuelva el mayor producto
de dos de ellos. Por ejemplo, si recibe los números 1, 5, -2, -4 debe devolver 8, que es el producto
más grande que se puede obtener entre ellos (8 = −2 × −4). */

const numerosMayores = (a,b,c,d)=>{
    let resultado=0
    if((a*b) > (c*d)){
        resultado = a*b
    }else if((a*b) < (c*d)){
        resultado = c*d
    }else{
        ((a*b) == (c*d))
        resultado = a*b
    }
    console.log(resultado)
}


numerosMayores(1,5,-2,-4)