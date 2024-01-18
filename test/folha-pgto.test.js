import { somaHorasExtras, calculaDescontos } from "..";

describe('Tests to calculate salary.', () => {
    it("The method called somaHorasExtras should return the sum of over time.", () => {
        const expected = 100;
        const response = somaHorasExtras(50, 50);
        
        expect(response).toBe(expected);
    });
    
    it("Should discount the salary", () => {
        const expected = 2000;
        const response = calculaDescontos(2500, 500);
        
        expect(response).toBe(expected);
    });
});