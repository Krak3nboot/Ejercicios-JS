/// Cree una función que reciba una matriz de números y devuelva una matriz que contenga solo los números negativos

const calculoMatrizNegativos =(b)=>{
    //console.log(b)
    let array = []
    for (let i = 0; i <= b.length; i++) {
       if (i< 0){
            array = array.push(i)
       }
    }
    console.log(array)
}
calculoMatriz([1,-1,2,3,-4,-5,6,7,-3])