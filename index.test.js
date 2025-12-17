/*
He elejido un conjunto de pruebas basándome en el metodo CORRECT
que hemos visto en el temario.
- En la primera y la tercera podemos observar la cardinaliddad, ya que solo hay un elemento.
- En la segunda prueba se observa la existencia, ya que los valores no existen.
- En la cuarta prueba podemos observar la conformidad con el código, ya que aunque tenemos
  ventas altas, tenemos también muchisimas devoluciones, y eso hace que no nos de como resultado
  5 sino 1.
*/


const index = require("./index.js");

test("Ventas altas sin devoluciones", () => {
    const resultat = index.CalculaTipo(500,0)
    expect(resultat).toBe(5);
});

test("Ventas y devoluciones con valor 0", () => {
    const resultat = index.CalculaTipo(0,0)
    expect(resultat).toBe(0);
});

test("No hay ventas pero si devoluciones", () => {
    const resultat = index.CalculaTipo(0,25)
    expect(resultat).toBe(0);
});

test("Ventas altas, pero devoluciones también altas", () => {
    const resultat = index.CalculaTipo(600,500)
    expect(resultat).toBe(1);
});

