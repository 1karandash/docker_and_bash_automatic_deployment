const request = require('supertest');
const app3 = require('./express3.js');
const supertest = require('supertest');

  

describe('GET /app3', () => {
    test("Expect 200 status", async() =>{
        const response = await supertest(app3).get('/app3');
        expect(response.status).toBe(200);
    })

    test('Response to contain "Express3" string', async () => {
        const response = await supertest(app3).get('/app3');
        expect(response.text).toContain('Express3');
    });

    test('Response to be JSON type', async () => {
        const response = await supertest(app3).get('/app3');
        expect(response.type).toBe('application/json');    
    });
});
