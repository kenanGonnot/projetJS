// const fs = require('fs-extra');
// const R= require('ramda');
import * as R from 'ramda'
import * as fs from 'fs-extra'


const readPrediction = R.prop('prediction');

const ensureDirectoryExist = targetDir => fs.ensureDirSync(`./predicted/${targetDir}`);


export {ensureDirectoryExist, readPrediction};
