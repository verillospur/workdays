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
            const lg = msg => { log.add(`[persistence.saveWorkingDay()]: ${msg}`, 'verbose'); };

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
            const lg = msg => { log.add(`[persistence.loadWorkingDay()]: ${msg}`, 'verbose'); };
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
                
                // get register entry
                lg('finding register entry');
                const register = require('./register');
                const entry = register.findByDate(d);

                // get file path
                const filepath = entry.filepath;
                lg(`got file path: ${filepath}`);

                // get object from file
                const reader = require('./dayreader').create();
                const obj = reader.read(filepath);
                
                lg('loaded object: ' + obj);
                rv = obj;
                
            } catch (err) {
                lg(`error: ${err.msg}`);
                const errorHandler = require('../../errorHandler');
                errorHandler.handle(err);
            }

            lg('returning workingDay object');
            return rv;
        },

        loadByDate: date => this.loadWorkingDay,

        loadById: id => {
            const lg = msg => { log.add(`[persistence.loadById()]: ${msg}`, 'verbose'); };
            lg('started');

            const workingDay = require('../workingday');
            let rv;
            try {
                
                // get register entry
                lg('finding register entry');
                const register = require('./register');
                const entry = register.findById(id);

                // get file path
                const filepath = entry.filepath;
                lg(`got file path: ${filepath}`);

                // get object from file
                const reader = require('./dayreader').create();
                const obj = reader.read(filepath);
                
                lg('loaded object: ' + obj);
                rv = obj;
                
            } catch (err) {
                lg(`error: ${err.msg}`);
                const errorHandler = require('../../errorHandler');
                errorHandler.handle(err);
            }

            lg('returning workingDay object');
            return rv;
        },

        listSavedWorkingDays: () => {
            const lg = msg => { log.add(`[persistence.listSavedWorkingDays()]: ${msg}`, 'verbose'); };
            lg('started');

            let rv = [];
            try {
                
                lg('loading register');
                const register = require('./register');
                
                rv = [...register.entries];
                

            } catch (err) {
                lg(`error: ${err.msg}`);
                const errorHandler = require('../../errorHandler');
                errorHandler.handle(err);
            }

            lg('returning array');
            return rv;
        },

    }

})();

module.exports = persistence;
