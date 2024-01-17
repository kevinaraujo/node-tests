import { somaHorasExtras, calculaDescontos } from "..";

test("somaHorasExtras should return the sum of over time.", () => {
    const expected = 100;
    const response = somaHorasExtras(50, 50);

    expect(response).toBe(expected);
});

test("Should discount the salary", () => {
    const expected = 2000;
    const response = calculaDescontos(2500, 500);

    expect(response).toBe(expected);
});