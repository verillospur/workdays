// config.js 
//  ~/config.js 
// ----------------------------- 
//  App configuration settings. 
// 
// --------------------------------------------- 
// 	2020-04-13  BS      Created. 
// 
// --------------------------------------------- 
// 
'use strict';

const config = () => {

    return {
        
        APP_NAME: 'vsotw-workdays',
        APP_WMSG: [
            'verillospur: [o] n [t] h e [w] e b',
            'part of The Urchin Maccleschlong Group'
            ],

        LOG: require('../log/config'),
        WORKINGDAY: require('../workingday/config')
    };
};

module.exports = config();