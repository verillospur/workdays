// 
'use strict';

const url = `http://localhost:${[process.env.WEBAPP_PORT]}`;

const log = require('../../log');
const lg = msg => { log.add(`[__tester]: ${msg}`); };


const listener = res => {
    const lg = msg => { log.add(`[__tester.listener]: ${msg}`); };
    lg('listener started')
    res.on('data', chunk => {
        lg(`listener-data: ${chunk}`);
    });
    lg('listener finished')
};


const tester = () => {

    lg('requesting');
    const http = require('http');
    // const req = http.request(url, listener);
    const req = http.get(url, listener);
    req.on('response', res => {
        // lg('[__tester]: response: ' + res);
        // res.on('data', chunk => {
        //     lg(`data: ${chunk}`);
        // });
    });
    lg('returning request');
    return req;
};

module.exports = {
    run: tester
};