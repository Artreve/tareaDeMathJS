/*Tarea 1
Obtener un número aleatorio entre 1 y 100

Calcular su raíz cuadrada y mostrar en consola el resultado

Elevarlo a la quinta potencia y mostrar en consola el resultado
Tarea 2
Según la siguiente lista de números: 120,250,78,96,-38,45.72,1450,2380
Mostrar en consola el menor
Mostrar en consola el mayor
Tarea 3
Dado los siguientes números, dejarlos con dos decimales y mostrar en consola los mismos redondeados:
45.895025
56.788789
78.413582

Plus: devolver las consignas de las tareas en un template string que indique qué es lo que estamos obteniendo.*/

//Tarea 1
let numero = Math.ceil(Math.random()*100+1);
console.log(`La raiz cuadrada de ${numero} es ${Math.sqrt(numero)} y el resultado de elvarlo a la 5ta potencia es ${Math.pow(numero,5)}`);
//Tarea 2
console.log(`Del listado de numeros 120,250,78,96,-38,45.72,1450,2380; el mayor es ${Math.max(120,250,78,96,-38,45.72,1450,2380)} y su menor es ${Math.min(120,250,78,96,-38,45.72,1450,2380)}`);
//Tarea 3
let numero1 = 45.895025;
let numero2 = 56.788789;
let numero3 = 78.413582;
console.log(`del numero 45.895025; con 2 decimales quedaria ${numero1.toFixed(2)} y redondeado seria ${Math.round(numero1)} `);
console.log(`del numero 56.788789; con 2 decimales quedaria ${numero2.toFixed(2)} y redondeado seria ${Math.round(numero2)} `);
console.log(`del numero 78.413582; con 2 decimales quedaria ${numero3.toFixed(2)} y redondeado seria ${Math.round(numero3)} `);