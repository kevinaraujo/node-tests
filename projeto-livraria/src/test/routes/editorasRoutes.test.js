import { describe, expect, it } from '@jest/globals';
import request from 'supertest';
import app from '../../app.js';

let server;

beforeEach(() => {
  const port = 3000;
  server = app.listen(port);
});

afterEach(() => {
  server.close();
});

describe('GEt in /editoras.', () => {
  it('Should return a editoras list.', async () => {
    const res = await request(app)
      .get('/editoras')
      .set('accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);

    expect(res.body[0].email).toEqual('e@e.com');
  });
});

let idResponse;
describe('POST in /editoras.', () => {
  it('Should add a new editora', async () => {
    const res = await request(app)
      .post('/editoras')
      .send({
        nome: 'CDC',
        cidade: 'califa',
        email: 's@s.com',
      })
      .expect(201);
    idResponse = res.body.content.id;
  });
});

describe('DELETE in /editoras', () => {
  it('Should delete the recorded added', async () => {
    await request(app)
      .delete(`/editoras/${idResponse}`)
      .expect(200);
  });
});

describe('GET in /editoras/id', () => {
  it('Should return the especific resource by id', async () => {
    await request(app)
      .get(`/editoras/${idResponse}`)
      .expect(200);
  });
});
