module.exports = {
    isWorkingDayInstance: obj => {
        const workingDay = require('./workingday')
        let rv = true;
        if (!obj || !(obj instanceof workingDay)) {
            rv = false;
        }
        return rv;
    },
};