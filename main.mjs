import * as R from 'ramda'
import {mvToFilePredicted, ensureDirectoryExist} from './modules/file-utils.mjs';
import {callTensorflow, readPrediction} from './modules/machineLearning-utils.mjs';
import {readBbox, readSizeOfImages} from './modules/resize-bbox.mjs';

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
    return bboxValue + imageDim
};


const mainPartTwo = image => R.zipWith(calculBbox , readBbox(callTensorflow(image)), [1,2,3,4])

//
// const mainPartTwo = R.pipe(R.applySpec({
//         sourceFile: R.identity,
//         bbox: R.zipWith(calculBbox , [1,2], [1,2]),
//         image: R.map(readSizeOfImages, R.identity)
//     }),
//




const mapIndexed = R.addIndex(R.map);

// console.log(mapIndexed(main, images))
console.log(mainPartTwo(images))
// console.log(readBbox(callTensorflow(images)))

// console.log(R.map(readSizeOfImages, images))