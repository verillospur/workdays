// data.js 
//  ~/routes/data.js 
// ----------------------------------------- 
//  WebApp data router. 
// 
// --------------------------------------------- 
// 	2020-05-10		BS		Created. 
// 
// --------------------------------------------- 
// 
'use strict';

const log = require('../../../log');
const lg = msg => { log.add(`[data_router()]: ${msg}`, 'verbose'); };

const config = require('../../../config');

const get_router = context => {

    lg('started');
    const express = require('express');
    const router = express.Router();

    lg('router.get()');
    router.get('/', 
        function (req, res, next) {
            lg('router.get.callback().');
            lg('rendering');
            res.render(
                config.SERVER.VIEW_DATA,
                {
                    page_title: 'Manage Data',
                    context: context
                }
            );
        }
    );

    lg('returning router');
    return router;
};

module.exports = {
    get_router: get_router
};