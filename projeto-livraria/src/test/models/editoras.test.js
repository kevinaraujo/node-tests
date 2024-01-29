import { describe, expect, it } from '@jest/globals';
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

  it('Should save on DB using modern syntax.', async () => {
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
});
