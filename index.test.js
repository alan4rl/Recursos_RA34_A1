
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

