import * as R from "ramda";

const callTensorflow = str => ({
    bbox: [Math.random(), Math.random(), Math.random(), Math.random()],
    prediction: (['dogs', 'cats', 'panda']).sort(() => Math.random() - 0.5)[0],
})

const readPrediction = R.prop('prediction');

export {callTensorflow, readPrediction};
