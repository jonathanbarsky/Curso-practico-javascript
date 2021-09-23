const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
]

const lista1Count = {};

lista1.map(
    function (elemento) {
        if (lista1Count[elemento]) {
            lista1Count[elemento] += 1;
        }
        else {
            lista1Count[elemento] = 1;
        }
    }
);

//const lista1Array = Object.entries(lista1Count);  a entries le podemos mandar como argumento el objeto que queremos convertir en un array, en este caso lista1Count
const lista1Array = Object.entries(lista1Count).sort(
    function (elementoA, elementoB) {
        return elementoA[1] - elementoB[1];
}
)

const moda = lista1Array[lista1Array.length - 1];


TAREA: crear una funcion(calcularModa) con este codigo ,,,que pueda recibir cualquier parametro para calcular culaquier lista y no solo lista1