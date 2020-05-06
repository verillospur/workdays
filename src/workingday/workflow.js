// workflow.js 
//  ~/workingday/workflow.js 
// ----------------------------------------- 
//  Workflow controller for adding a working day 
// 
// --------------------------------------------- 
// 	2020-05-05		BS		Created. 
// 
// --------------------------------------------- 
// 
'use strict';

const log = require('../log');

const workflow = (() => {
    return {

        DEBRIEF_WORKFLOW: {

            start: () => { run_workflow(workflow.DEBRIEF_WORKFLOW.onFinished); }, 
            onFinished: () => { log.add('DEBRIEF_WORKFLOW.onFinished()'); },
        }

    };
})();

const run_workflow = (onFinished) => {
    log.add('DEBRIEF_WORKFLOW.start()');

    /*
      -. 
      -. 
      -. validate data (input) 
      -. create workingDay instance
      -. save data file
      -. create registry entry
      -. save registry
    */
    
    const requiredInput = require('./required-input');
    const ri1 = requiredInput();
    const ri2 = requiredInput();
    const ri3 = requiredInput();
    log.table([ri1.name, ri2.name, ri3.name]);
    log.table([ri1.name, ri2.name, ri3.name]);

    if (onFinished) onFinished();
};

module.exports = workflow;
