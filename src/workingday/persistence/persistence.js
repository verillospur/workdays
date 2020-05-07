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
        }

    }
})();

module.exports = persistence;
