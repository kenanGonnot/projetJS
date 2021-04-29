import * as R from 'ramda'
import {mvToFilePredicted, ensureDirectoryExist} from './modules/file-utils.mjs';
import {callTensorflow, readPrediction, readBbox} from './modules/machineLearning-utils.mjs';
import {readSizeOfImages} from './modules/image-utils.mjs';

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

const calculBbox = (bboxValue, imageDim) => {
    return bboxValue + imageDim.height - imageDim.width
};

const mainPartTwo = image => R.zipWith(calculBbox , readBbox(callTensorflow(image)), R.repeat(readSizeOfImages(image[0]),4))

// utiliser R.times !

const mapIndexed = R.addIndex(R.map);

// console.log(mapIndexed(main, images))

// console.log(R.map(mainPartTwo,images))
console.log(mainPartTwo(images))