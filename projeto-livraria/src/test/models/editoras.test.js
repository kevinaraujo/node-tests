import {
  describe, expect, it, jest,
} from '@jest/globals';
import Editora from '../../models/editora.js';

describe('Testinh the editoras model', () => {
  const editoraObj = {
    nome: 'CDC',
    cidade: 'São Paulo',
    email: 'c@c.com',
  };

  it('Should instantiate a new editora.', () => {
    const editora = new Editora(editoraObj);

    expect(editora).toEqual(
      expect.objectContaining(editoraObj),
    );
  });

  it.skip('Should save editora on DB.', () => {
    const editora = new Editora(editoraObj);

    editora.salvar().then((data) => {
      expect(data.nome).toBe(editoraObj.nome);
    });
  });

  it.skip('Should save on DB using modern syntax.', async () => {
    const editora = new Editora(editoraObj);

    const data = await editora.salvar();

    const editoraFromDB = await Editora.pegarPeloId(data.id);

    expect(editoraFromDB).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        ...editoraObj,
        created_at: expect.any(String),
        updated_at: expect.any(String),
      }),
    );
  });

  it('Should mock to save editora on DB.', () => {
    const editora = new Editora(editoraObj);

    editora.salvar = jest.fn().mockReturnValue({
      id: 10,
      nome: 'CDC',
      cidade: 'São Paulo',
      email: 'c@c.com',
      created_at: '2024-01-01',
      updated_at: '2024-01-01',
    });

    const response = editora.salvar();

    expect(response).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        ...editoraObj,
        created_at: expect.any(String),
        updated_at: expect.any(String),
      }),
    );
  });
});
