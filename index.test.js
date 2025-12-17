const index = require("./index.js");

test("Venta alta sin devoluciones", () => {
    const resultat = index.CalculaTipo(500,0)
    expect(resultat).toBe(5);
});

test("Venta y devoluciones con valor 0", () => {
    const resultat = index.CalculaTipo(0,0)
    expect(resultat).toBe(0);
});

test("No hay ventas pero sin devoluciones", () => {
    const resultat = index.CalculaTipo(0,25)
    expect(resultat).toBe(0);
});

