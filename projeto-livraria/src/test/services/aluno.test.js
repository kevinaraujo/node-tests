import {
  describe, expect, it, jest,
} from '@jest/globals';
import Aluno from '../../services/aluno.js';

describe('Testing aluno file.', () => {
  it.only('Should return resolved with nota greater than 5.', async () => {
    const a = new Aluno();
    const result = await a.temNota(6);

    expect(result).toEqual(true);
  });

  it.only('Should return rejected with nota less than 5.', () => {
    const a = new Aluno();
    expect(a.temNota(2)).rejects.toThrow('Nota ruim');

    a.temNota(2).catch((err) => {
      expect(err.message).toBe('Nota ruim');
    });
  });

  it.only('Should return resolved with mocked promise', async () => {
    const a = new Aluno();
    a.temNota = jest.fn().mockResolvedValue(true);

    const res = await a.temNota(6);

    expect(res).toBeTruthy();
  });

  it.only('Should return rejected with mocked promise', async () => {
    const a = new Aluno();
    a.temNota = jest.spyOn(a, 'temNota').mockRejectedValue(false);

    const res = a.temNota(6);

    await expect(res).rejects.toEqual(false);
  });

  it.only('Should return rejected with nota less than 5.', async () => {
    const a = new Aluno();
    const temNotaSpy = jest.spyOn(a, 'teste');

    await a.temNota(6);

    expect(temNotaSpy).toHaveBeenCalled();

    temNotaSpy.mockRestore();
  });
});
