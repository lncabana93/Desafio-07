import './style.css';

/* Ejercicio 1 */

const Nombre = ['Luciano'];
console.log(Nombre);

/* Ejercicio 2 */

const edad = 22;
const precio = parseFloat(30.5);
const ciudad = ['Posadas Misiones Republica Argentina'];
const esEstudiante = ['true', 'Folse'];
console.log(edad, precio, ciudad, esEstudiante[0]);

/* Ejercicio 3 */

const nombre = ['Luciano'];
const apellido = ['Cabaña'];
console.log('Hola,', nombre, apellido);

/* Ejercicio 4 */

const num1 = 10; /*  utilizamos variables para ejercicio 5 */
const num2 = 5; /*  utilizamos variables para ejercicio 5 */
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num2 - num1);
console.log(num2 * num1);
console.log(num1 / num2);

/* Ejercicio 5 */

let numer = 5;
let numer2 = 10;
const contador = +numer + numer2++; /* var de incremento */
console.log(`numer:${numer},numer2:${numer2},contador:${contador}`);

const contadorUno = numer - numer2--; /* var de decremento */
console.log(`numer:${numer},numer2:${numer2},contador:${contadorUno}`);
/* Me queda la duda si el resultado tendria que ser -5 porque cuando consoleo veo que me da -6 */

/* Ejercicio 6 */
/* const name = prompt('Ingrese su nombre') */ //! Descomentar cuando termine //
console.warn('Bienvenido', name);

/* Ejercicio 7 */

/* const radio = prompt('ingrese el radio') */ //! Descomentar cuando termine //
/* const area = 3.14 * radio^2 */ /* formula(π * radio^2). */
/* console.log('Su area es:',area) */

/* Ejercicio 8 */

/* const gradosCelsius = prompt('Ingrese un valor') //! Descomentar cuando termine //
const gradosFarenheit = (gradosCelsius*9/5)+32
console.log(gradosFarenheit) */

/* Ejercicio 9 */

/* const numeroUnoUser = parseFloat(prompt('ingrese numero UNO'))   //! Descomentar cuando termine //
const numeroDOSUser = parseFloat(prompt('ingrese numero DOS'))
const numeroTresUser = parseFloat(prompt('ingrese numero TRES'))
let promedio = (numeroUnoUser+numeroDOSUser+numeroTresUser)/3
console.log(promedio)
 */

/* Ejercicio 10 */

const nuMero = 5;
let valor = 3 < nuMero;
console.log(valor);

let valorNuevo = 2 > nuMero;
console.log(valorNuevo);

/* Ejercicio 11 */

/* debugger */
/* 
const edadUser = prompt('Ingrese su edad')
if (edadUser >= 18){
  console.log('Usted es Mayor de edad')
}

if (edadUser <18 ){
  console.log('Usted es menor de edad')
}

 */

/* Ejercicio 12 */

let dias = prompt('Ingrese un numero del 1 al 7');

switch (dias) {
  case '1':
    console.log('Lunes');
    break;

  case '2':
    console.log('Martes');
    break;

  case '3':
    console.log('Miercoles');
    break;

  case '4':
    console.log('Jueves');
    break;

  case '5':
    console.log('Viernes');
    break;

  case '6':
    console.log('Sabado');
    break;

  case '7':
    console.log('Domingo');
    break;

  default:
    console.log('Día no encontrado');
    break;
}
