// namegen.js 
//  ~/namegen.js 
// ----------------------------------------- 
//  Name generator. 
// 
// --------------------------------------------- 
// 	2020-05-05		BS		Created. 
// 
// --------------------------------------------- 
// 
'use strict';

const log = require('./log');

// les names
const nmsP = [
    'cuthbert', 
    'shiraam', 
    'anastasia', 
    'felix', 
    'bob', 
    'albert'
];
const nmsS = [
    'arondale', 
    'beduila', 
    'karakatak', 
    'fitardo', 
    'botswaarl'
];

const get_name = () => {
    const rnd = require('./randomnumber');

    const pi = Math.round((rnd() * (nmsP.length -1)));
    const si = Math.round((rnd() * (nmsS.length -1)));
    // log.table([[pi, si]]);

    const seed = Number(new Date()) * rnd();

    const p = nmsP[ pi ];   
    const s = nmsS[ si ];
    const n = Math.round(rnd() * seed /99000000);
    const rv = `${p}-${s}-${n}`;
    return rv;
};

module.exports = get_name;