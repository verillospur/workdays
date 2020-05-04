// utils.js 
//  ~/utils.js 
// ----------------------------------------- 
//  General utilities
// 
// --------------------------------------------- 
// 	2020-05-04		BS		Created. 
// 
// --------------------------------------------- 
// 
'use strict';

const moment = require('moment');

const utils = {

    doubleDigits: n => new Intl.NumberFormat('en-GB', { minimumIntegerDigits: 2 }).format(n)
    
    ,

    formatTime: t => moment(t).format(moment.HTML5_FMT.TIME)
    

};

module.exports = utils;