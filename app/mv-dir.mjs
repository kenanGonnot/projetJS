import * as R from 'ramda'
import * as fs from 'fs-extra'



// const mvToFilePredicted = (srcFile, destDir) => fs.copySync(`${srcFile}`,
//     `./predicted/${destDir}/${srcFile}`, {overwrite: true});

const mvToFilePredicted = (srcFile, destDir, index) => fs.copySync(`${srcFile}`,
    `./predicted/${destDir}/${index}.jpg`, {overwrite: false});


export {mvToFilePredicted};