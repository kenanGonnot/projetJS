import * as R from 'ramda'
import * as sizeOf from 'image-size'

const readSizeOfImages = R.pipe(sizeOf.imageSize, R.dissoc('type'))

export {readSizeOfImages}




