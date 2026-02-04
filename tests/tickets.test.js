const request = require('supertest');
const app = require('../app');

describe('Tickets API', () => {

  it('GET /tickets powinno zwrócić status 200', async () => {
    const response = await request(app).get('/tickets');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

});

it('POST /tickets powinno dodać nowe zgłoszenie', async () => {
  const response = await request(app)
    .post('/tickets')
    .send({
      title: 'Test',
      description: 'Testowe zgłoszenie'
    });

  expect(response.statusCode).toBe(201);
  expect(response.body).toHaveProperty('id');
  expect(response.body.status).toBe('OPEN');
})