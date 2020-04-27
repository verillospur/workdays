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

/**
 * * Represents a single completed working day.
 */
class workingDay {

    constructor(date) {
    
        //#region property initialisation
        
        this._value = 'Value!';

        const now = date || new Date();

        this._date = now;
        this._year = now.getFullYear();
        this._month = now.getMonth();
        this._day = now.getDate();

        this._loadingTime = now;
        this._debriefTime = now;
        this._shiftLength = '';
        this._actualShiftLength = 0;
        this._mileageLoading = 0;
        this._mileageDebrief = 0;
        this._routeNumber = '';
        this._paymentOwed = 0;
        this._packageCount = 0;
        this._stopCount = 0;
        this._missingCount = 0;
        this._extrasCount = 0;
        this._returnsCount = 0;
        this._returnsInfo = '';

        //#endregion
    
    }

    //#region property gets

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

    get loadingTime() {
        return this._loadingTime;
    }
    get debriefTime() {
        return this._debriefTime;
    }
    get shiftLength() {
        return this._shiftLength;
    }
    get actualShiftLength() {
        return this._actualShiftLength;
    }
    get mileageLoading() {
        return this._mileageLoading
    }
    get mileageDebrief() {
        return this._mileageDebrief
    }
    get routeNumber() {
        return this._routeNumber;
    }
    get paymentOwed() {
        return this._paymentOwed;
    }
    get packageCount() {
        return this._packageCount;
    }
    get stopCount() {
        return this._stopCount;
    }
    get missingCount() {
        return this._missingCount;
    }
    get extrasCount() {
        return this._extrasCount;
    }
    get returnsCount() {
        return this._returnsCount;
    }
    get returnsInfo() {
        return this._returnsInfo;
    }

    //#endregion

    //#region static methods

    static fromJson(data) {
        const obj = JSON.parse(data);
    }

    static getThing() {
        if (!myClass._thing) {
            myClass._thing = 1;
        }
        myClass._thing++;
        return myClass._thing;
    }

    //#endregion

    //#region public methods

    getValue() {
        return this._value;
    }

    toJson() {
        return JSON.stringify(this);
    }

    //#endregion


};


// const day1 = new workingDay();
// const day2 = new workingDay(new Date(2020, 3, 5));

// console.log(`Working.\n day1: ${day1.getDay()} \n day2: ${day2.getDay()}`);

module.exports = workingDay;