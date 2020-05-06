// workflow.js 
//  ~/workflow.js 
// ----------------------------------------- 
//  Workflow controller 
// 
// --------------------------------------------- 
// 	2020-05-05		BS		Created. 
// 
// --------------------------------------------- 
// 
'use strict';

const workflow = (() => {
    return {

        WORKING_DAY: require('./workingday/workflow')
        
    };
})();


module.exports = workflow;
