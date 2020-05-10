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

const showWelcome = app => {

    let appMsg = '';
    if (app) {
        switch (app) {
            case 'webapp':
                appMsg = '-- w e b a p p --';
                break;
            case 'service':
                    appMsg = '-- s e r v i c e --';
                    break;
            case '':
            default:
                appMsg = '-- c o n s o l e --';
                break;
        }
    }

    const config = require('./config');
    const moment = require('moment');
    const du = require('./workingday/persistence/dirUtils');

    log.line();
    log.add(`* Welcome to ${config.APP_NAME}`);

    if (appMsg.length > 0) {
        log.add(`* ${appMsg}`);
    }

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

const showGoodbye = () => {

    log.line();
    log.add('* execution complete. ');
    log.line();
    log.add('goodbye!');
};

module.exports = {
    show: showWelcome,
    goodbye: showGoodbye
};