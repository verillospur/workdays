// required-input.js 
//  ~/workingday/required-input.js 
// ----------------------------------------- 
//  Requisite input for workingday workflow.
// 
// --------------------------------------------- 
// 	2020-05-05		BS		Created. 
// 
// --------------------------------------------- 
// 
'use strict';

const log = require('../log');
const utils = require('../utils');

const workingDay = require('./workingday');

const DEFAULT_VALUE = '<undefined>';

const REQUIRED = () => {
    // const o = () => {
    function requiredInput() {

        this.defaultValue = DEFAULT_VALUE;
        this.date = DEFAULT_VALUE;
        this.routeNumber = DEFAULT_VALUE;
        this.mileageLoading = DEFAULT_VALUE;
        this.mileageDebrief = DEFAULT_VALUE;
        this.timeLoading = DEFAULT_VALUE;
        this.timeDebrief = DEFAULT_VALUE;
        this.breakMinutes = DEFAULT_VALUE;
        this.packageCount = DEFAULT_VALUE;
        this.stopCount = DEFAULT_VALUE;
        this.returnsCount = DEFAULT_VALUE;
        this.returnsInfo = DEFAULT_VALUE;

        this.name = utils.generateName();
    };
    requiredInput.prototype.getName = function() { return this.name; };
    
    //#region create-workingday
    requiredInput.prototype.createWorkingDayObject = () => {

        // create object
        const obj = new workingDay(this.date);

        // set properties
        obj.routeNumber = this.routeNumber;
        obj.mileageLoading = this.mileageLoading;
        obj.mileageDebrief = this.mileageDebrief;
        obj.timeLoading = this.timeLoading;
        obj.timeDebrief = this.timeDebrief;
        obj.packageCount = this.packageCount;
        obj.stopCount = this.stopCount;
        obj.breakMinutes = this.breakMinutes;
        obj.returnsCount = this.returnsCount;
        obj.returnsInfo = this.returnsInfo;

        // post-processing
        obj.shiftActualMinutes = 
            workingDay.calculateShiftMinutes(this.timeLoading, this.timeDebrief);

        // return it, den, init
        return obj;
    };
    //#endregion
    
    requiredInput.prototype.populateFromWorkingDayObject = obj =>{
        if (obj) {
            this.routeNumber = obj.routeNumber;
            this.mileageLoading = obj.mileageLoading;
            this.mileageDebrief = obj.mileageDebrief;
            this.timeLoading = obj.timeLoading;
            this.timeDebrief = obj.timeDebrief;
            this.packageCount = obj.packageCount;
            this.stopCount = obj.stopCount;
            this.breakMinutes = obj.breakMinutes;
            this.returnsCount = obj.returnsCount;
            this.returnsInfo = obj.returnsInfo;
        }
    };


    const o = new requiredInput();
    // o.name = utils.generateName();
    // o.prototype.getName = () => this.name;
    requiredInput.prototype.name = 'well here it is...';

    return o;
};

module.exports = REQUIRED;