class Aluno {
  constructor() {
    this.nota = 10;
  }

  teste() {
    return this.nota;
  }

  async temNota(nota) {
    return new Promise((resolve, reject) => {
      try {
        this.teste();
        if (nota > 5) {
          resolve(true);
        } else {
          throw new Error('Nota ruim');
        }
      } catch (err) {
        reject(err);
      }
    });
  }
}

export default Aluno;
