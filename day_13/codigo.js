// comentario
console.log("Mi primer javascript!");
// comentario
console.log("Soy el primer script");

var mensaje = "Hola Mundo!\nQué fácil es incluir 'comillas simples'\ny \"comillas dobles\""

alert(mensaje);

var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

for (i=0; i < 12; i++){
    console.log(meses[i]);
}

var valores = [true, 5, false, "hola", "adios", 2];
function mayorString(arr) {
    if (arr[3].length > arr[4].length) {
        return arr[3];
    } else {
        return arr[4];
    }
}
mayorString(valores);

function trueOrFalse(arr) {
    if (arr[0] && arr[2]){
        return false;
    } else if (arr[0] || arr[2]) {
        return true;
    }
}
trueOrFalse(valores);

function operarArr(arr) {
    let a = arr[1];
    let b = arr[5];
    suma = a + b;
    resta = a - b;
    mult = a * b;
    divide = a / b;
}
operarArr(valores);

var num1 = 5;
var num2 = 8;
 
if(num1 < num2) {
  console.log("numero1 no es mayor que numero2");
}
if(num2 > 0) {
  console.log("numero2 es positivo");
}
if(num1 < 0) {
  console.log("numero1 es negativo o distinto de cero");
}
if(num2 > num1+1) {
  console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}


var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
var dni = 53757726
var letra = 'X';

function letraDni(num, letra, arr){
    if (num < 0 || num > 99999999){
        console.log("El número proporcionado no es válido!");
    } else {
        if (arr[num%23] != letra){
            console.log("La letra porporcionada no es correcta.")
        } else {
            console.log("El número y la letra son correctos.")
            console.log(arr[num%23]);
        }
    }
}
letraDni(dni, letras, letra);


function calculoFactorial(nFactorial) {
    let resultado = 1;
    for (i = 0; i < nFactorial; i++){
        resultado *= (nFactorial - i);
    }
    console.log(resultado);
}
calculoFactorial(5);

