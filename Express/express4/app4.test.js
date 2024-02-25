const request = require('supertest');
const app4 = require('./express4.js');
const supertest = require('supertest');

  

describe('GET /app4', () => {
    test("Expect 200 status", async() =>{
        const response = await supertest(app4).get('/app4');
        expect(response.status).toBe(200);
    })

    test('Response to contain "Express4" string', async () => {
        const response = await supertest(app4).get('/app4');
        expect(response.text).toContain('Express4');
    });

    test('Response to be JSON type', async () => {
        const response = await supertest(app4).get('/app4');
        expect(response.type).toBe('application/json');    
    });
});
