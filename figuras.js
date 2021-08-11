// codigo del cuadrado
console.group("Cuadrados");

//const ladoCuadrado = 5;
//console.log("Los lados del  cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
} 
perimetroCuadrado()
//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return lado * lado;
}  
areaCuadrado()
//console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");

console.groupEnd();

// codigo del triángulo
console.group("Triangulos");

// const ladoTriagulo1 = 6;
// const ladoTriagulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//     "Los lados del triángulo miden: " 
//     + ladoTriagulo1 
//     + "cm, " 
//     + ladoTriagulo2 
//     + "cm, " 
//     + baseTriangulo 
//     + "cm"
// );

//const alturaTriangulo = 5.5;
//console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
// console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

//const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

function areaTriangulo(altura, base) {
    return (altura * base) / 2;
}
//console.log("El área del triangulo es: " + areaTriangulo + "cm^2");


console.groupEnd();

// codigo del circulo
console.group("Circulos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + "cm");


// Diámetro 
function diametroCirculo(radio) {
    return radio * 2;
}


// PI
// const PI = 3.1415;
const PI = Math.PI; //esta es la forma de invocar pi con el escritor de codigo
console.log("PI es: " + PI);


// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}


// Area
function areaCirculo(radio) {
    return  (radio * radio) * PI;
} 
//console.log("El área del circulo es: " + areaCirculo + "cm^2");


console.groupEnd();