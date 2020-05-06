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

const log = require('../log');
const config = require('../config');
const errorHandler = require('../errorHandler');

//#region registryEntry class
class registryEntry {
    constructor(name) {

        this._name = name;
        this._isPersisted = false;
        this._filename = '';
        this._filePath = '';
    }

    //#region property accessors
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

}
//#endregion

const register = (() => {

    const setPaths = entry => {
        if (entry) {
            
            const datadir = config.WORKINGDAY.DATA_DIRECTORY_PATH;
            const path = require('path');
            const filename = entry.name + (
                config.WORKINGDAY.DATAFILE_USE_JSON_FILEEXT ?
                'json' : config.WORKINGDAY.DATAFILE_DEFAULTEXT);
            const filepath = path.join(datadir, filename);
            
            entry.filename = filename;
            entry.filePath = filepath;

        }
    };

    return {

        entries: [],

        addEntry: name => {
            const entry = new registryEntry(name);
            setPaths(entry);
            this.entries.push(entry);
        },

    };

})();


module.exports = register;
