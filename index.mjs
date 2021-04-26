// Note: Require the cpu and webgl backend and add them to package.json as peer dependencies.
// require('@tensorflow/tfjs-node');
// const cocoSsd = require('@tensorflow-models/coco-ssd');
// const fs = require('fs-extra');
// const jpeg = require('jpeg-js');
// const Bromise = require('bluebird');
// const look = require('ramda-debug');
// const R = require('ramda');
// const R = look.wrap(require('ramda'));

import * as R from 'ramda'
import * as fs from 'fs-extra'
import {readPrediction, ensureDirectory} from './dir-creator.mjs';
import {mvToFilePredicted} from './mv-dir.mjs';



// look.on();

// const pathImages = "/Users/KENAN/Desktop/IA/Javascript/Homework/projetJS/image";
//
//
// const fileReader = (x) => fs.readFile(x, 'utf8');
//
// const readJpg = async (path) => jpeg.decode(await fs.readFile(path), true);


// (async () => {
//     const imgList = await Bromise.map(
//         ['./dog.jpg', './panda.jpg', './little-red-panda.jpg'],
//         readJpg
//     );
//
//     console.log('Lecture fichier Image');
//     console.log(imgList);
//
//     // Load the model.
//     const model = await cocoSsd.load();
//     console.log('après charge model');
//     // Classify the image.
//     const predictions = await Bromise.map(imgList, (x) => model.detect(x));
//
//     console.log('après predictions');
//
//     console.log('Predictions: ');
//     console.log(R.flatten(predictions));
//
//
//
//
// })();


const detectImage = str => ({
    bbox: [Math.random(), Math.random(), Math.random(), Math.random()],
    prediction:(['dogs','cats','panda']).sort(() => Math.random() -0.5)[0],
})


// console.log(detectImage('coucou'))
// console.log(detectImage('test'))
// console.log(detectImage('aze'))




// --------------------------------------------------------------------
// const fileReader = (x) => fs.read(x, 'utf8');

// const readPrediction = R.prop('prediction');
//
// const ensureDirectory = a => fs.ensureDir(`./predicted/${a}`);
//
// const ensureDirectories = R.map(ensureDirectory);

const addPredictionToListPred = R.pipe(detectImage, readPrediction, ensureDirectory)

addPredictionToListPred('aze');
addPredictionToListPred('aze');
addPredictionToListPred('aze');
addPredictionToListPred('aze');
addPredictionToListPred('aze');
addPredictionToListPred('aze');



const images = ['./image/cats_00001.jpg', './image/dogs_00001.jpg','./image/panda_00001.jpg'];
const pred = ['cats', 'dogs', 'panda'];


const main = (listImages, predict) => R.pipe(
    addPredictionToListPred(predict),
    R.andThen(mvToFilePredicted(images,readPrediction))
)(a);


// const main = listImages => R.pipe(
//     addPredictionToListPred,
//     R.andThen(mvToFilePredicted(images,readPrediction))
// )(a);

// main(listPred);










