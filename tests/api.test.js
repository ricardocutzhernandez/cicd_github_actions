const { italic } = require('ansi-colors')
const request = require('supertest')

const app = require('../src/app')

// test para ruta default
describe('GET /', () => {
    it('deberia tener: ruta por defecto', done => {
        request(app)
            .get('/')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    });

    it('debe retornar error', done => {
        request(app)
            .get('/error')
            .set('Accept', 'application/json')
            .expect('Content-Type', /html/)
            .expect(404, done)
    });
})

describe('GET /example', () => {
    it('/example/ : ruta raiz de examples', done => {
        request(app)
            .get('/example')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect('"hello world!"')
            .end(done)
    });

    it('/example/:nombre : debe retornar el nombre', done => {
        request(app)
            .get('/example/node_js_test')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect('"node_js_test"')
            .end(done)
    });
})