//******************************************************************************************************************************* */
//******************************************************************************************************************************* */
//## Ejercicio #1
// Escribir una función que tome un arreglo de números y devuelva el número mayor de la lista. 
// Ejemplo del arreglo : [3, 5, 7, 1, 6]
let num1 = [3,5,7,1,6];
mayor(num1);
function mayor (array)
{
console.log("El número mayor de la lista es: ",array.sort((a,b) => b-a )[0]); // 3[5,7,6,3,1], 5[7,6,5,3,1], 7[7,6,5,3,1]
return array;
};
//******************************************************************************************************************************* */
//******************************************************************************************************************************* */
// ## Ejercicio #2
// María llega a su entrevista de trabajo para el rol de Desarrollador Junior y se le pide que resuelva este problema:
// Dada una lista de números [-1, 3, 4, 2, 6], escribe una función en javascript para calcular el número más pequeño.
let num2 = [-1, 3, 4, 2, 6];
minimo(num2);
function minimo(array)
{
console.log("El número menor de la lista es: ", array.sort()[0]);
//console.log(array);
return array;
};
//******************************************************************************************************************************* */
//******************************************************************************************************************************* */
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
num3.sort((a,b) =>
{
    return a-b;
});
//console.log(num3);
let x = num3.length-1;
let y=[];
let z=0;
while(z<=num3.length)
{
    let prueba = false;
    let contador = 0;
    for(let i=0;i<=x ;i++)
    {
        
        if(num3[z]==num3[i] && z!=i)
        {
            contador++
            prueba = true;
            y=[num3[z]];
            //console.log(y);
        } 
    };
    if(prueba==true)
            {
                console.log("El número "+y+ " se repite: " + contador);
            };  
    z++; 
};
//******************************************************************************************************************************* */
//******************************************************************************************************************************* */
// ## Ejercicio #4
// Escribir una función que tome un arreglo ordenado y devuelva un arreglo completamente desordenado
// Entrada: [1, 2, 5, 14, 24, 31, 50, 105]
// Posible salida: [105, 31, 14, 1, 2, 50, 24, 5]
// Posible salida: [, , , 1, , 50, , ]
//posible solución un if para floor y ceil

let num5 = [1, 2, 5, 14, 24, 31, 50, 105];  //arreglo de números ordenados
r=num5.length-1;                            //Longitud del arreglo de números
let q=[];                                   // se creó un arreglo vacío para asignar los valores aleatoreos

while (q.length<= r)                        //Ciclo para asignar valores al arreglo vacío con el mismo tamaño que el arreglo original
{
    let s=Math.round(Math.random()*r);      // Se crea la posición aleatoria del arreglo original y así tomar el número en esa posición
    //console.log("aleatorio",num5[s]);
    for(let i=0; r>=i;i++)                  //For para verificar y comparar los números del arreglo original y el nuevo
    {
       if(q[i]!=num5[s] && q.length==i)     //comparación para evitar asignar números repetidos
            {
                q.push(num5[s]);            //push para asignar los nuevos valores aleatorios modificando la longitud del arreglo
                //console.log(q);
                break
            } else if (q[i]==num5[s])       //Si el número aleatorio ya existe en la nueva cadena, se debe de salir para esocger otro
                {
                    break;
                }
    }
};
console.log("La lista desordenada es: "+ q);