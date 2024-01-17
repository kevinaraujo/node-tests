import { somaHorasExtras, calculaDescontos } from "..";

test("somaHorasExtras should return the sum of over time.", () => {
    const expected = 100;
    const response = somaHorasExtras(50, 50);

    expect(response).toBe(expected);
})