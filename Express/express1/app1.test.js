const request = require('supertest');
const app1 = require('./express1.js');
const supertest = require('supertest');

  

describe('GET /app1', () => {
    test("Expect 200 status", async() =>{
        const response = await supertest(app1).get('/app1');
        expect(response.status).toBe(200);
    })

    test('Response to contain "Express1" string', async () => {
        const response = await supertest(app1).get('/app1');
        expect(response.text).toContain('Express1');
    });

    test('Response to be JSON type', async () => {
        const response = await supertest(app1).get('/app1');
        expect(response.type).toBe('application/json');    
    });
});
