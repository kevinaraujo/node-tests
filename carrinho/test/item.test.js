import Item from "../item.js";

describe("Test item class.", () => {
    it("Should have 3 fields: nome, valor and quantidade.", () => {
        const item = new Item(
            'Beterraba',
            2.5,
            10
        );

        expect(item.nome).toBe('Beterraba');
        expect(item.valor).toBe(2.5);
        expect(item.quantidade).toBe(10);
    });

    it("Should return the item total value according to quantidade and value.", () => {
        const item = new Item(
            'Beterraba',
            0.1,
            3
        );

        const total = item.pegaValorTotalItem();
        expect(total).toBeCloseTo(0.3);
    })
});