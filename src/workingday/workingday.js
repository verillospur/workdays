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

const log = require('../log');

/**
 * * Represents a single completed working day.
 */
class workingDay {

    _DEFAULT_ID_VALUE() { return '-1'; }

    constructor(date) {
        log.add('workingDay constructor() started');

        //#region property initialisation

        this._id = this._DEFAULT_ID_VALUE();

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
        log.add('workingDay._setDate() started');
        
        this._date = date;
        this._year = date.getFullYear();
        this._month = date.getMonth() + 1;          // date.month is zero-based (dec=11! no!)
        this._day = date.getDate();

        // * set id
        this._setId(date);
    }

    _setId(date) {
        log.add('workingDay._setId() started');

        let n = -1;
        try {

            const d = new Date(date.getUTCFullYear(), date.getUTCMonth() +1, date.getUTCDate(), 0, 0, 0, 0);
            const ms = Date.parse(d);
            n = Number(ms);
            
        } catch (err) {
            log.add(`workingDay._setId(): error squishing n from d: ${err}`);
        }

        let b = false;
        if (n > 0) {
            this._id = n;
            b = true;

            log.add(`workingDay._setId(): set _id to: ${this._id}`);
        }

        return b;
    }

    //#endregion

    //#region property accessors

    get id() {

        if (this._id == this._DEFAULT_ID_VALUE()) {
            this._setId(this.date);
        }

        return this._id;
    }
    set id(v) {
        this._id = v;
    }

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
    set mileageLoading(v) {
        this._mileageLoading = v;
    }

    get mileageDebrief() {
        return this._mileageDebrief
    }
    set mileageDebrief(v) {
        this._mileageDebrief = v;
    }

    get mileage() {
        return (this._mileageDebrief - this.mileageLoading);
    }
    
    get routeNumber() {
        return this._routeNumber;
    }    
    set routeNumber(v) {
        this._routeNumber = v;
    }


    get paymentOwed() {
        return this._paymentOwed;
    }
    set paymentOwed(v) {
        this._paymentOwed = v;
    }

    get packageCount() {
        return this._packageCount;
    }
    set packageCount(v) {
        this._packageCount = v;
    }

    get stopCount() {
        return this._stopCount;
    }
    set stopCount(v) {
        this._stopCount = v;
    }

    get missingCount() {
        return this._missingCount;
    }
    set missingCount(v) {
        this._missingCount = v;
    }

    get extrasCount() {
        return this._extrasCount;
    }
    set extrasCount(v) {
        this._extrasCount = v;
    }

    get returnsCount() {
        return this._returnsCount;
    }
    set returnsCount(v) {
        this._returnsCount = v;
    }

    get returnsInfo() {
        return this._returnsInfo;
    }
    set returnsInfo(v) {
        this._returnsInfo = v;
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

    /**
     * * Calculate actual minutes of shift time. 
     * @param {Date} start * Loading time
     * @param {Date} debrief Debrief time
     */
    static calculateShiftMinutes(start, debrief) {
        const moment = require('moment');
        moment(debrief).diff(moment(start), 'minutes');
    }

    //#endregion

    //#region instance methods

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

    getUniqueName() {
        const namer = require('./dayNamer');
        return namer.getUniqueName(this);
    }


    getValue() {
        return this._value;
    }

    toJson() {
        return JSON.stringify(this);
    }

    toPersistanceDataString() {
        return this.toJson();
    }

    //#endregion

    toString() {

        // const d = new Date();
        // d.toDateString()
        return `[workingDay:\"${this.getUniqueName()}\"(${this.id})]`;
    }

};

module.exports = workingDay;