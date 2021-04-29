import * as R from 'ramda'
import {mvToFilePredicted, ensureDirectoryExist} from './functions/file-utils.mjs';
import {callTensorflow, readPrediction} from './functions/machineLearning-utils.mjs';
import {readBbox, readSizeOfImages} from './functions/resize-bbox.mjs';

const images = ['./image/cats_00001.jpg', './image/dogs_00001.jpg', './image/panda_00001.jpg'];

const mvFile = sourceAndPrediction => mvToFilePredicted(sourceAndPrediction.sourceFile, sourceAndPrediction.prediction, sourceAndPrediction.index)

const main = R.pipe(R.applySpec({
        sourceFile: R.nthArg(0),
        prediction: R.pipe(callTensorflow, readPrediction),
        index: R.nthArg(1)
    }),
    R.tap(R.pipe(readPrediction, ensureDirectoryExist)),
    R.tap(mvFile)
)

const mapIndexed = R.addIndex(R.map);

console.log(mapIndexed(main, images))

