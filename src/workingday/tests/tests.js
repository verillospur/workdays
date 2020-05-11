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

const create_sample_day = () => {
    const o = new workingDay(tests.sample_day.getWorkingDate());
    o.setShiftTimes(10, 45, 19, 20, 10);
    o.routeNumber = 'T385';
    o.packageCount = 220;
    o.stopCount = 158;
    o.mileageLoading = 52649;
    o.mileageDebrief = 52784;
    return o;
};

const create_sample_days = count => {
    count = count || 10;

    const endDate = tests.sample_day.getWorkingDate();

    const rv = [];

    const moment = require('moment');    
    for (let diff = 0; diff < count; diff++) {
        
        const date = moment(endDate).subtract(diff, 'day').toDate();
        
        const o = new workingDay(date);
        o.setShiftTimes(
            8 + (Math.round(Math.random() * 4)), 
            (Math.round(Math.random() * 12) * 5), 
            17 + (Math.round(Math.random() * 3)), 
            (Math.round(Math.random() * 12) * 5), 
            (Math.round(Math.random() * 30)), 
        );
        o.routeNumber = 'T' + (300 + ((10 * diff) +1)).toString();
        o.packageCount = Math.round((Math.random() * 250));
        o.stopCount = Math.round((Math.random() * 160));
        o.mileageLoading = (5264 * diff);
        o.mileageDebrief = (5264 * diff) + (15 * diff);
        
        rv.push(o);
    }
    
    return rv;
};

const tests = {

    //#region day_store

    day_store: {

        testWrite: require('./test-write'),
        generateDebriefText: require('./test-debriefgen')
    },
    //#endregion

    //#region sample_day

    sample_day: {

        create: create_sample_day,
        createMany: create_sample_days,
        createInput: dayObject => require('./test-required-input')(dayObject),
        getWorkingDate: () => { const d = new Date(); return d; }

    }
    //#endregion
    
};

module.exports = tests;