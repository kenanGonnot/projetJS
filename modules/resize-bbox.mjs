import * as R from 'ramda'
import * as fs from 'fs-extra'
import * as sizeOf from 'image-size'

const readBbox = R.prop('bbox');

const readSizeOfImages = R.pipe(sizeOf.imageSize, R.dissoc('type'))


export {readBbox, readSizeOfImages}




