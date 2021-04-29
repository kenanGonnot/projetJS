import * as R from 'ramda'
import * as fs from 'fs-extra'



// const mvToFilePredicted = (srcFile, destDir) => fs.copySync(`${srcFile}`,
//     `./predicted/${destDir}/${srcFile}`, {overwrite: true});

const mvToFilePredicted = (srcFile, destDir) => fs.copySync(`${srcFile}`,
    `./predicted/${destDir}/01.jpg`, {overwrite: false});


export {mvToFilePredicted};