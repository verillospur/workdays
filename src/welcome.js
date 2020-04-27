// welcome.js 
//  ~/welcome.js 
// ----------------------------------------- 
//  Welcome messages. 
// 
// --------------------------------------------- 
// 	2020-04-23		BS		Created. 
// 
// --------------------------------------------- 
// 
'use strict';

const log = require('./log');

const showWelcome = () => {

    const config = require('./config');
    const moment = require('moment');
    const du = require('./workingday/dirUtils');

    log.line();
    log.add(`* Welcome to ${config.APP_NAME}`);
    const appwmsg = config.APP_WMSG;
    if (appwmsg && appwmsg.length > 0) {
        if (Array.isArray(appwmsg)) {
            appwmsg.forEach(msg => {
                log.add(`* ${msg}`)
            });
        }
        else {
            log.add(`* ${appwmsg}`);
        }
    }
    log.add(`* Started: ${moment().format(moment.HTML5_FMT.DATETIME_LOCAL)}`);
    log.add(`* Log level: ${config.LOG.LEVEL}`);
    log.add(`* Data directory: ${du.getDataDirectoryPath()}`);
    log.line();



};

module.exports = {
    show: showWelcome
};