const request = require('supertest');
const app2 = require('./express2.js');
const supertest = require('supertest');

  

describe('GET /app2', () => {
    test("Expect 200 status", async() =>{
        const response = await supertest(app2).get('/app2');
        expect(response.status).toBe(200);
    })

    test('Response to contain "Express2" string', async () => {
        const response = await supertest(app2).get('/app2');
        expect(response.text).toContain('Express2');
    });

    test('Response to be JSON type', async () => {
        const response = await supertest(app2).get('/app2');
        expect(response.type).toBe('application/json');    
    });
});
