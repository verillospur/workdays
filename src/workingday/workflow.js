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
            onFinished: context => { log.add('DEBRIEF_WORKFLOW.onFinished()'); },
        }

    };
})();

const run_workflow = (onFinished) => {
    const lg = msg => { log.add(`run_workflow(): ${msg}`); };
    lg('started');

    lg('creating workflow context');
    const workflowContext = require('./workflow-context');
    const context = workflowContext.get;
    lg(`context.name: ${context.name}`);

    /*
      * Save a working day
      -. 
      -. get data from user/client
      -. validate data (input) 
      -. create workingDay instance
      -. save data file
      -. create registry entry
      -. save registry
      -. generate debrief report
      -. push debrief report to user/client
    */
    
    // todo: get input...
    lg('getting input (tbc)');

    //
    // required input
    const requiredInput = require('./required-input');

    const ri1 = requiredInput();
    const ri2 = requiredInput();
    const ri3 = requiredInput();
    log.table([ri1.name, ri2.name, ri3.name]);
    log.table(
        [
            [ri1.name, ri2.name, ri3.name],
            [ri1.getName(), ri2.getName(), ri3.getName()],
            [ri1.getName(), ri2.getName(), ri3.getName()],
            [ri1.routeNumber, ri2.routeNumber, ri3.routeNumber]
        ]        
    );

    // 
    // generate test input
    const tests = require('./tests');
    const ri = tests.sample_day.createInput();

    //
    // create workingDay
    lg('creating workingDay object');
    const wd = ri.createWorkingDayObject();
    lg(`input routeNumber: ${ri.routeNumber}`);
    lg(`object routeNumber: ${wd.routeNumber}`);
    

    //
    // validation
    lg('validating data');
    const validator = require('./validator');
    const validation = validator.validate(wd);
    lg(`validation: ${validation}`);


    if (validation) {

        //
        // save it
        lg('saving');
        const persistence = require('./persistence');
        persistence.saveWorkingDay(wd);

        //
        // generate debrief
        lg('generating debrief report');
        const reporter = require('./debriefReport');
        const report = reporter.generateReport(wd);
        lg(`debrief report:- \n${report}`);

        // todo: push report 
        
    }


    //
    // onFinished, or some such
    lg('firing onFinished()')
    if (onFinished) onFinished(context);
};

module.exports = workflow;
