// tests.js 
//  ~/workingday/tests.js 
// ----------------------------------------- 
//  Tests stuff for workingDay. 
// 
// --------------------------------------------- 
// 	2020-04-28		BS		Created. 
// 
// --------------------------------------------- 
// 
'use strict';

const workingDay = require('../../workingday');
const daywriter = require('../../workingday/daywriter');
const dayreader = require('../../workingday/dayreader');

const tests = {

    //#region day_store

    day_store: {

        testWrite: require('./test-write')

    },

    //#endregion

    //#region sample_day

    sample_day: {

        create: () => new workingDay(tests.sample_day.getWorkingDate())
        ,

        getWorkingDate: () => new Date()

    }
    //#endregion
    
};

module.exports = tests;