import * as R from 'ramda'
import * as fs from 'fs-extra'


const mvToFilePredicted = (srcFileName, destDir) => fs.copySync(`./image/${srcFileName}`,
    `./predicted/${destDir}/${srcFileName}`, {overwrite: true});


export {mvToFilePredicted};