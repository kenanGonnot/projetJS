import * as fs from 'fs-extra'

const ensureDirectoryExist = targetDir => fs.ensureDirSync(`./predicted/${targetDir}`);

const mvToFilePredicted = (srcFile, destDir, index) => fs.copySync(`${srcFile}`,
    `./predicted/${destDir}/${index}.jpg`, {overwrite: false});

export {ensureDirectoryExist, mvToFilePredicted};
