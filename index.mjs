import * as R from 'ramda'
import * as fs from 'fs-extra'
import {readPrediction, ensureDirectoryExist} from './app/dir-creator.mjs';
import {mvToFilePredicted} from './app/mv-dir.mjs';
import {readBbox, readSizeOfImages} from './app/resize-bbox.mjs';


const callTensorflow = str => ({
    bbox: [Math.random(), Math.random(), Math.random(), Math.random()],
    prediction: (['dogs', 'cats', 'panda']).sort(() => Math.random() - 0.5)[0],
})


const addPredictionToListPred = R.pipe(callTensorflow, readPrediction, ensureDirectoryExist)

const images = ['./image/cats_00001.jpg', './image/dogs_00001.jpg', './image/panda_00001.jpg'];
// const images = ['./image/cats_00001.jpg','4','5'];
const pred = ['cats', 'dogs', 'panda'];

const main2 = R.pipe(callTensorflow, readPrediction, ensureDirectoryExist)

const log2 = (src, dest) => console.log("src " + src + " dest " + dest)

const mvFile = sourceAndPrediction => mvToFilePredicted(sourceAndPrediction.sourceFile, sourceAndPrediction.prediction, sourceAndPrediction.index)
//
// const main3 = R.pipe(R.applySpec({
//         sourceFile: R.identity,
//         prediction: R.pipe(callTensorflow, readPrediction, R.tap(ensureDirectoryExist))
//     }),
//     mvFile
//     // R.compose(log2, R.prop('sourceFile'), R.prop('prediction'))
//     // R.values
//     // R.tap(console.log)
//     // mvToFilePredicted(R.nth(0),R.nth(1))
// )
const main4 = R.pipe(R.applySpec({
        sourceFile: R.nthArg(0),
        prediction: R.pipe(callTensorflow, readPrediction, R.tap(ensureDirectoryExist)),
        index: R.nthArg(1)
    }),
    mvFile
)

const mapIndexed = R.addIndex(R.map);

console.log(mapIndexed(main4, images))





