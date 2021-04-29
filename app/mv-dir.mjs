// const R = require('ramda');
// const fs = require('fs-extra');
import * as R from 'ramda'
import * as fs from 'fs-extra'



const mvToFilePredicted = (srcFileName, destDir) => fs.moveSync(`./image/${srcFileName}`,
    `./predicted/${destDir}/${srcFileName}`, {overwrite:true});




// mvToFilePredicted('cats_00002.jpg', 'cats' );

export {mvToFilePredicted};