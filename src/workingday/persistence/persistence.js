// persistence.js 
//  ~/persistence/persistence.js
// ----------------------------------------- 
//  An attempt at a facade for the data layer
// 
// --------------------------------------------- 
// 	2020-05-07		BS		Created. 
// 
// --------------------------------------------- 
// 
'use strict';

const log = require('../../log');

const persistence = (() => {
    return {

        //#region saveWorkingDay
        saveWorkingDay: dayObject => {
            const lg = msg => { log.add(`[saveWorkingDay()]: ${msg}`, 'verbose'); };

            if (!require('../fw-pv').isWorkingDayInstance(dayObject)) {
                lg('invalid workingDay object')
                throw new Error('Invalid workingDay object');
            }
            lg('started');

            let rv = false;
            try {

                //
                // write workingDay
                lg(' writing...');
                const writerFx = require('./daywriter');
                const writer = writerFx.create();
                const writerSuccess = writer.write(dayObject);

                lg(`writerSuccess: ${writerSuccess}`)

                //
                // register
                lg('adding to register')
                const register = require('./register');
                register.addEntry(dayObject)
                register.save();
                

                rv = writerSuccess;
            } catch (err) {
                lg(`error: ${err.msg}`);
                const errorHandler = require('../../errorHandler');
                errorHandler.handle(err);
            }
        
            return rv;
        },
        //#endregion

        loadWorkingDay: date => {
            const lg = msg => { log.add(`[loadWorkingDay()]: ${msg}`, 'verbose'); };
            lg('started');

            let d;
            let d_ok = false;
            if (date) {
                try {
                    d = new Date(Date.parse(date.toString()));
                    d_ok = true;
                } catch (err) {
                }
            }
            if (!d_ok) {
                lg('error: invalid date argument');
                throw new Error('Invalid date.');
            }

            lg(`using date: ${d}`);

            const workingDay = require('../workingday');
            let rv;
            try {

                

                rv = new workingDay(d);
                
            } catch (err) {
                lg(`error: ${err.msg}`);
                const errorHandler = require('../../errorHandler');
                errorHandler.handle(err);
            }

            lg('returning workingDay object');
            return rv;
        }
    }

})();

module.exports = persistence;
