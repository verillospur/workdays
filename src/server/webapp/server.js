// server.js 
//  ~/server/server.js 
// ----------------------------------------- 
//  Entry point for server functions
// 
// --------------------------------------------- 
// 	2020-05-08		BS		Created. 
// 
// --------------------------------------------- 
// 
'use strict';

const config = require('../config');
const log = require('../log');

const path = require('path');

const server = function() {
    
    const context = { expressApp: 'not-initialised' };

    const start_server = () => {
        const lg = msg => { log.add(`[server]: ${msg}`, 'verbose'); };
        lg('started');

        if (!config.SERVER.TESTS_USETESTRUNSERVER) {

            lg('setting up express app');
            const express = require('express');
            const app = express();

            // setup views
            app.set('views', path.join(__dirname, config.SERVER.VIEWS_ROOT));
            app.set('view engine', 'ejs');
            app.use(express.json());
            app.use(express.urlencoded({ extended: false }));
    
            // set static root
            app.use(express.static(path.join(__dirname, config.SERVER.STATIC_ROOT)));

            // setup routes
            var router = express.Router();
            app.use(router.get('/', (req, res, send) => { res.render(config.SERVER.VIEW_INDEX, { page_title: '' }); }));

            // remember express app (grabbed by bin/www)
            context.expressApp = app;
        }

        // test server 
        // todo: remove
        else {
            lg('test-server: todo: REMOVE');
            context.expressApp = { name: 'testapp-' + require('../utils').generateName() };
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