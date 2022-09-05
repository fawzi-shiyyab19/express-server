'use strict';

const { app } = require('../server');

const supertest = require('supertest');

const request = supertest(app);


describe('Testing API routes',()=>{

it('testing main route', async ()=>{
    const response = await request.get('/');
    expect(response.text).toEqual('Hello World');
})

it('Testing person route',async()=>{

    const response = await request.post('/person');
    expect(typeof response.body).toEqual('object');
})
})