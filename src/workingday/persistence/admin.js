

const log = require('../../log');
const config = require('../../config');
const errorHandler = require('../../errorHandler')

const admin = {

    reset_data: () => {
        const lg = msg => { log.add(`[admin.reset_data()]: ${msg}`); };
        
        try {
            lg('started');
            
            const dirpath = config.WORKINGDAY.DATA_DIRECTORY_PATH;
            lg(`data directory: ${dirpath}`);

            lg('getting file list');
            const fs = require('fs');
            const path = require('path');
            if (fs.existsSync(dirpath)) {
                const files = fs.readdirSync(dirpath);

                lg(`deleting ${files.length} file(s)`);
                files.forEach(f => {
                    const p = path.join(config.WORKINGDAY.DATA_DIRECTORY_PATH, f);
                    lg(`deleting: ${p}`);
                    try {
                        fs.unlinkSync(p);
                    } catch (err) {
                        lg(`error deleting: ${err}`);
                    }
                });
            }

            else { lg('data directory does not exist.'); }

            lg('reset complete');
            
        } catch (err) {
            errorHandler.handle(err);
            lg('error: ' + err);
        }
    },

};

module.exports = admin;