
import Carrinho from "../carrinho";
import Item from "../item.js";

describe('Test the carrinho methods.', () => {
    it('Should have initialize empty', () => {
        const carrinho = new Carrinho();

        expect(carrinho.itens).toEqual([]);
        expect(carrinho.subtotal).toBeNull();
        expect(carrinho.total).toBeNull();
    });

    it('Should have items.', () => {
        const item1 = new Item('Beterraba', 2.5, 10);
        const item2 = new Item('Beterraba', 3, 5); 

        const carrinho = new Carrinho();
        carrinho.adiciona(item1);
        carrinho.adiciona(item2);


        expect(typeof carrinho.itens).toBe('object');
        expect(carrinho.itens[0]).toEqual(item1);
        expect(carrinho.itens[1]).toEqual(item2);

        expect(carrinho.itens).toContain(item1);
        expect(carrinho.itens).toContain(item2);
    });

    it('Should have property "total" on initialization.', () => {
        const carrinho = new Carrinho();

        expect(carrinho).toHaveProperty("total");
    })

    
    it('Should throw exception when trying finish the purchase with empty cart.', () => {
        const wrappedFunction = () => {
            const carrinho = new Carrinho();
            carrinho.finalizaCompra(); 
        };

        expect(wrappedFunction).toThrow('Carrinho de compras vazio');
    });
})