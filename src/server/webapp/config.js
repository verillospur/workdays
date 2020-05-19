// config.js 
//  ~/server/config.js 
// ----------------------------- 
//  Server config 
// 
// --------------------------------------------- 
// 	2020-05-08      BS      Created.  
// 
// --------------------------------------------- 
// 
'use strict';

const config = (() => {

    return {

        // todo: remove
        TESTS_USETESTRUNSERVER: true,   //false,
        
        // * Auto-start server on first request for app
        //
        AUTO_START: true,

        // * Port to listen on
        PORT: process.env.WEBAPP_PORT || 3000,
        
        // * Directory names for various server dwubs
        // * Relative to ~/server/
        //
        STATIC_ROOT: 'static',
        VIEWS_ROOT: 'views',
        
        // * View names
        VIEW_INDEX: 'index',
        VIEW_DATA: 'data',
        VIEW_NEWDAY: 'newday',


    };
})();

module.exports = config;