import Carrinho from '../carrinho';
import Item from '../item.js';

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

    expect(carrinho).toHaveProperty('total');
  });

  it('Should throw exception when trying finish the purchase with empty cart.', () => {
    const wrappedFunction = () => {
      const carrinho = new Carrinho();
      carrinho.finalizaCompra();
    };

    expect(wrappedFunction).toThrow('Carrinho de compras vazio');
  });

  it('Should add freight.', () => {
    const carrinho = new Carrinho();
    carrinho.adicionaFrete(110);

    expect(carrinho.frete).toBe(110);
  });

  it('Should finish the purchase.', () => {
    const item1 = new Item('Banana', 2, 5);
    const item2 = new Item('Mel', 3, 10);

    const carrinho = new Carrinho();
    carrinho.adiciona(item1);
    carrinho.adiciona(item2);
    carrinho.adicionaFrete(10);

    expect(carrinho.finalizaCompra()).toStrictEqual({
      subtotal: 40,
      frete: 10,
      total: 50,
    });
  });

  it('Should return the subtotal.', () => {
    const item1 = new Item('Banana', 2, 5);
    const item2 = new Item('Mel', 3, 10);

    const carrinho = new Carrinho();
    carrinho.adiciona(item1);
    carrinho.adiciona(item2);
    carrinho.adicionaFrete(10);

    const total = carrinho.calculaTotal();
    expect(total).toEqual(50);
  });
});
