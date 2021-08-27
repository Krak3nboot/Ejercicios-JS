/// Calcule la suma de números en una matriz de números.

const calculoMatriz =(b)=>{
   let suma =0;
   for (let i = 0; i < b.length; i++) {
       suma += b[i];
   }
}
calculoMatriz([1,2,3,4,5,6,7,8,9,10])