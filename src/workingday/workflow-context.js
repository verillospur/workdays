// workflow-context.js 
//  ~/workingday/workflow-context.js 
// ----------------------------------------- 
//  Context object for active workflow
// 
// --------------------------------------------- 
// 	2020-05-07		BS		Created. 
// 
// --------------------------------------------- 
// 
'use strict';

const log = require('../log');

class workflowContext {
    constructor() {

        this._name = '';
    }

    get name() {
        return this._name;
    }
    set name(v) {
        this._name = v;
    }

}

const create_context = () => {
    const obj = new workflowContext();
    obj.name = require('../utils').generateName();
    return obj;
}
const get_context = (() => {
    return create_context();
})();


module.exports = {
    get: get_context,
    create: create_context
}