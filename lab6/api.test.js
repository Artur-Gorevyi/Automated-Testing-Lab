const request = require('supertest');
const app = require('./app');

describe('GET /api/dogs', () => {
    it('повинен повернути масив собак', async () => {
        const res = await request(app).get('/api/dogs');
        expect(res.status).toBe(200);
        expect(res.body).toEqual(expect.arrayContaining([expect.objectContaining({ name: expect.any(String) })]));
    });
});

describe('GET https://gorest.co.in/public-api/users', () => {
    it('повинен повернути список користувачів', async () => {
        const res = await request('https://gorest.co.in/public-api').get('/users');
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('data');
        expect(Array.isArray(res.body.data)).toBe(true);
    });
});
