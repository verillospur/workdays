// server.js 
//  ~/server/server.js 
// ----------------------------------------- 
//  Entry point for webapp server 
// 
// --------------------------------------------- 
// 	2020-05-08		BS		Created. 
// 
// --------------------------------------------- 
// 
'use strict';

const config = require('../../config');
const log = require('../../log');

const path = require('path');

const server = function() {
    
    const context = { expressApp: 'not-initialised' };
    const indexRouter = require('./routes/index');
    const dataRouter = require('./routes/data');

    const start_server = () => {
        const lg = msg => { log.add(`[server]: ${msg}`, log.getLevels().verbose); };
        lg('started');

        if (!config.SERVER.TESTS_USETESTRUNSERVER) {

            context.data = require('../../workingday/tests').sample_day.createSampleRegister(23);

            lg('setting up express app');
            const express = require('express');
            const app = express();
            context.expressApp = app;

            // setup views
            app.set('views', path.join(__dirname, config.SERVER.VIEWS_ROOT));
            app.set('view engine', 'ejs');
            app.use(express.json());
            app.use(express.urlencoded({ extended: false }));
    
            // set static root
            app.use(express.static(path.join(__dirname, config.SERVER.STATIC_ROOT)));

            // setup routes
            app.use('/', indexRouter.get_router(context));
            app.use('/data', dataRouter.get_router(context));
            
        }

        // test server 
        // todo: remove
        else {
            lg('test-server: todo: REMOVE');
            context.expressApp = { name: 'oomph. use .data', data: 'testapp-' + require('../../utils').generateName() };
        }

        lg('finished');
    };

    const get_expressapp = () => {
        return context.expressApp;
    };

    if (config.SERVER.AUTO_START) {
        start_server();
    }
    
    return {
        
        start: () => {
            start_server();
        },
        getExpressApp: () => { return get_expressapp(); },
    };
    
};

module.exports = server();