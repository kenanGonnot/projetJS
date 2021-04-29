import * as R from 'ramda'
import * as fs from 'fs-extra'
import {readPrediction, ensureDirectoryExist} from './app/dir-creator.mjs';
import {mvToFilePredicted} from './app/mv-dir.mjs';
import {readBbox, readSizeOfImages} from './app/resize-bbox.mjs';


const callTensorflow = str => ({
    bbox: [Math.random(), Math.random(), Math.random(), Math.random()],
    prediction:(['dogs','cats','panda']).sort(() => Math.random() -0.5)[0],
})

// console.log(callTensorflow('coucou'))

const addPredictionToListPred = R.pipe(callTensorflow, readPrediction, ensureDirectoryExist)

addPredictionToListPred('aze');

const images = ['./image/cats_00001.jpg', './image/dogs_00001.jpg','./image/panda_00001.jpg'];
const pred = ['cats', 'dogs', 'panda'];

const main2 = R.pipe(callTensorflow, readPrediction)

console.log(R.map(main2,images))





const main = (listImages, predict) => R.pipe(
    addPredictionToListPred(predict),
    R.andThen(mvToFilePredicted(images,readPrediction))
)(a);











