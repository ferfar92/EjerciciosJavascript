//## Ejercicio #1
// Escribir una función que tome un arreglo de números y devuelva el número mayor de la lista. 
// Ejemplo del arreglo : [3, 5, 7, 1, 6]

let num1 = [3,5,7,1,6];
console.log("Resultado",num1.sort((a,b) => b-a )[0]); // 3[5,7,6,3,1], 5[7,6,5,3,1], 7[7,6,5,3,1]
//console.log(num[0]);

// ## Ejercicio #2
// María llega a su entrevista de trabajo para el rol de Desarrollador Junior y se le pide que resuelva este problema:
// Dada una lista de números [-1, 3, 4, 2, 6], escribe una función en javascript para calcular el número más pequeño.
let num2 = [-1, 3, 4, 2, 6];
console.log("resultado", num2.sort((a,b) => a-b)[0]);

// ## Ejercicio #3
// Escribir una función que permita saber si un número se repite dentro de un arreglo.

// *Casos de prueba*:

// Caso 1: Resultado esperado: El número 5 se encuentra más de una vez
// [1, 22, 5, 17, 10, 5, 40, 5]

// Caso 2: Resultado esperado: El número 7 se encuentra más de una vez
// [7, 41, 5, 7, 10, 13, 2]

// Caso 3: Resultado esperado: No hay números repetidos
// [1, 22, 5, 14, 24, 31, 27, 15, 105]

let num3 = [1, 22, 5, 17, 10, 5, 40, 5]; //8 elementos

//let i=0;
let x=num3.length-1
let y=[];
let contador2 =0;
// let found = num3.find(element => element == num3[5] );
// console.log ("Found", found);
for (x ;  x >=0; x--) 
{
    //console.log(x);
    //console.log(num3[x]);
    let n=0;
    let contador=0;

while (n<=x) 
    {
        //console.log("posición", x);
        if(num3[x]==num3[n] && x != n)
        {
            let m= y.push(num3[x]);
            console.log("invento", y);
            contador++
            //console.log(num3[x]);
            //console.log(num3[n]);
            if(contador>=1)
            {
                contador2++
            }
        }
        n++;
        //x--;
    };
    if (contador2>=1) {
        //console.log("El número "+num3[x]+ " se repite: " + contador2); 
    } 
    
};


// num3.forEach(element => {
//     if (element[i]===element) {
//         console.log("El número "+ element + " se repite")
//     }
//     //return console.log("Ningún número se repite");
//     i++;
// }, i);

// ## Ejercicio #4
// Escribir una función que tome un arreglo ordenado y devuelva un arreglo completamente desordenado
// Entrada: [1, 2, 5, 14, 24, 31, 50, 105]
// Posible salida: [105, 31, 14, 1, 2, 50, 24, 5]
// Posible salida: [, , , 1, , 50, , ]


let num5 = [1, 2, 5, 14, 24, 31, 50, 105];
r=num5.length-1;
let q=[];

while (q.length<= r)
{
    let p = Math.random()*r;
    //console.log(q.length);
    let s=Math.floor(p);
    for(let i=0; r>i;i++)
    {
        console.log(num5[s]);
        //console.log(i);
        if(q[i]!=num5[s] && q.length==i)
            {
                q.push(num5[s]);
                //q[i]=num5[s];
                console.log(q);
                break
                
            } else if (q[i]==num5[s])
                {
                    break;
                }
    }

};