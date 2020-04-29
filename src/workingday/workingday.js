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

        this._setDate(now);

        this._loadingTime = now;
        this._debriefTime = now;
        this._breakMinutes = 0;
        this._shiftActualMinutes = 0;
        this._shiftLength = '';
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

    //#region private methods

    _setDate(date) {
        this._date = date;
        this._year = date.getFullYear();
        this._month = date.getMonth();
        this._day = date.getDate();
    }

    //#endregion

    //#region property accessors

    get date() {
        return this._date;
    }
    set date(v) {
        this._setDate(v);
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
    set loadingTime(v) {
        this._loadingTime = v;
    }

    get debriefTime() {
        return this._debriefTime;
    }
    set debriefTime(v) {
        this._debriefTime = v;
    }

    get breakMinutes() {
        return this._breakMinutes;
    }
    set breakMinutes(v) {
        this._breakMinutes = v;
    }

    get shiftActualMinutes() {
        return this._shiftActualMinutes;
    }
    set shiftActualMinutes(v) {
        this._shiftActualMinutes = v;
    }

    get shiftLength() {
        return this._shiftLength;
    }
    set shiftLength(v) {
        this._shiftLength = v;
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

    static calculateShiftMinutes(start, finish) {
        const moment = require('moment');
        moment(finish).diff(moment(start), 'minutes');
    }

    //#endregion

    //#region public methods

    //#region setShiftTimes()

    /**
     * * Sets the following properties:
     * * - loadingTime
     * * - debriefTime
     * * - breakMinutes
     * * - shiftActualMinutes
     * @param {*} loadingTimeHour 
     * @param {*} loadingTimeMinute 
     * @param {*} debriefTimeHour 
     * @param {*} debriefTimeMinute 
     * @param {*} breakMinutes 
     */
    setShiftTimes(loadingTimeHour,
        loadingTimeMinute,
        debriefTimeHour,
        debriefTimeMinute,
        breakMinutes
    ) {

        const loadTime = new Date(
            this.year, this.month, this.day,
            loadingTimeHour, loadingTimeMinute,
            0, 0);
        const debTime = new Date(
            this.year, this.month, this.day,
            debriefTimeHour, debriefTimeMinute,
            0, 0);

        breakMinutes = 0 || breakMinutes;

        this._shiftActualMinutes = (
            workingDay.calculateShiftMinutes(loadTime, debTime)
            - breakMinutes);

        this._loadingTime = loadTime;
        this._debriefTime = debTime;
        this._breakMinutes = breakMinutes;
    }

    //#endregion

    getValue() {
        return this._value;
    }

    toJson() {
        return JSON.stringify(this);
    }

    //#endregion


};

module.exports = workingDay;