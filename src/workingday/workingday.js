// workingday.js 
//  ~/workingday/workingday.js 
// ----------------------------- 
//  workingDay class definition. 
// 
// --------------------------------------------- 
// 	2020-04-13  BS      Created.  
// 
// --------------------------------------------- 
// 
'use strict';

class workingDay {

    constructor(date) {
        this._value = 'Value!';

        const now = date || new Date();

        this._date = now;
        this._year = now.getFullYear();
        this._month = now.getMonth();
        this._day = now.getDate();
    }

    getValue() {
        return this._value;
    }

    static getThing() {
        if (!myClass._thing) {
            myClass._thing = 1;
        }
        myClass._thing++;
        return myClass._thing;
    }

    get date() {
        return this._date;
    }

    get year() {
        return this._year;
    }
    get month() {
        return this._month;
    }
    get day() {
        return this._day;
    }

};

// const day1 = new workingDay();
// const day2 = new workingDay(new Date(2020, 3, 5));

// console.log(`Working.\n day1: ${day1.getDay()} \n day2: ${day2.getDay()}`);

module.exports = workingDay;