// const fs = require('fs-extra');
// const R= require('ramda');
import * as R from 'ramda'
import * as fs from 'fs-extra'


const readPrediction = R.prop('prediction');

const ensureDirectoryExist = a => fs.ensureDir(`./predicted/${a}`);

const ensureDirectories = R.map(ensureDirectoryExist);




export {ensureDirectoryExist, ensureDirectories, readPrediction};
