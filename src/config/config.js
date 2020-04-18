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
        
        LOG: require('../log/config'),
        WORKINGDAY: require('../workingday/config')
    };
};

module.exports = config();