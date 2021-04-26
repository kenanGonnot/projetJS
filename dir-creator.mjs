// const fs = require('fs-extra');
// const R= require('ramda');
import * as R from 'ramda'
import * as fs from 'fs-extra'


const preds = ['dirA', 'dirB','dirC'];

const readPrediction = R.prop('prediction');

const ensureDirectory = a => fs.ensureDir(`./predicted/${a}`);

const ensureDirectories = R.map(ensureDirectory);





export {ensureDirectory, ensureDirectories, readPrediction};
