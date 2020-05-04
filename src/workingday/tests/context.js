// context.js 
//  ~/workingday/tests/context.js 
// ----------------------------------------- 
//  Test context.
// 
// --------------------------------------------- 
// 	2020-05-03		BS		Created. 
// 
// --------------------------------------------- 
// 
'use strict';

const context = (() => {

    return {

        assert: require('./assert'),


        tests: [],
        addTest: name => {
            this.tests.push(
                {
                    name: name,
                    isRunning: false,
                    isComplete: false, 
                    result: false,
                    assertions: []
                }
            );
        }

    };

})();


module.exports = context;