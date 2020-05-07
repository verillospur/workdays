// register.js 
//  ~/workingday/register.js 
// ----------------------------------------- 
//  Working day persistence register.
// 
// --------------------------------------------- 
// 	2020-05-04		BS		Created. 
// 
// --------------------------------------------- 
// 
'use strict';

const fs = require('fs');
const path = require('path');

const log = require('../../log');
const config = require('../../config');
const errorHandler = require('../../errorHandler');

const getfilename = require('./getfilename'); 
const getfilepath = require('./getfilepath'); 

//#region registryEntry class
class registryEntry {
    constructor(dayObject) {
        log.add('constructor: registerEntry', 'verbose');

        this._dayObject = dayObject;
        this._name = dayObject.getUniqueName();
        this._isPersisted = false;
        this._filename = '';
        this._filePath = '';

        this.setPaths(dayObject);
    }

    //#region property accessors

    get dayObject() {
        return this._dayObject;
    }
    set dayObject(v) {
        this._dayObject = v;
    }

    get name() {
        return this._name;
    }

    get isPersisted() {
        return this._isPersisted;
    }
    set isPersisted(v) {
        this._isPersisted = v;
    }

    get filename() {
        return this._filename;
    }
    set filename(v) {
        this._filename = v;
    }

    get filePath() {
        return this._filePath;
    }
    set filePath(v) {
        this._filePath = v;
    }
    //#endregion

    //#region instance methods
    
    setPaths(dayObject) {
        log.add('registerEntry.setPaths() started', 'verbose');
        if (dayObject) {
            
            entry.filename = getfilename.getfilename(dayObject);
            entry.filePath = getfilepath.getfilepath(dayObject);
        }
    };


    //#endregion

}
//#endregion

//#region the register
const register = (() => {

    log.add('register.setPaths() started', 'finished');
    return {

        entries: [],

        addEntry: dayObject => {
            const entry = new registryEntry(dayObject);
            setPaths(entry);
            this.entries.push(entry);
        },

    };

})();
//#endregion


const io = (() => {

    const getregisterpath = () => {
        const p = config.WORKINGDAY.DATA_DIRECTORY_PATH;
        const fn = config.WORKINGDAY.REGISTER.REGISTER_FILENAME;
        const fp = path.join(p, fn);
        return fp;
    }

    return {

        loadEntries: () => {
            // 
            // try to load the register from the json file.
            // if we can't, just use an empty register instead
            //
            let register = { entries: [] };
            const filepath = getregisterpath();
            if (fs.existsSync(filepath)) {
                try {
                    const registerData = fs.readFileSync(filepath, config.WORKINGDAY.DATAFILE_ENCODING);
                    if (registerData) {
                        register = JSON.parse(registerData);
                    }
                } catch (err) {
                    errorHandler.handle(err, false);
                }
            }
            return register.entries;
        },
        saveEntries: entries => {
            try {
                log.add('writing register');
                const register = { entries: entries };
                const registerData = JSON.stringify(register);
                const buffer = Buffer.from(registerData, config.WORKINGDAY.DATAFILE_ENCODING);
                const filepath = getregisterpath();
                fs.writeFileSync(filepath, registerData, config.WORKINGDAY.DATAFILE_ENCODING);
                log.add(`register saved to: ${filepath}`);
            } catch (err) {
                errorHandler.handle(err);
                log.add(`error saving register entries: ${err.message}`);
            }
        }
    };
})();



module.exports = register;