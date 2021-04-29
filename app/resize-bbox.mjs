import * as R from 'ramda'
import * as fs from 'fs-extra'
import * as sizeOf from 'image-size'


const readBbox = R.prop('bbox');

// const readSizeOfImages = R.prop('height', 'width')

// const statOfImages = image => sizeOf.imageSize(image)

const readSizeOfImages = image => R.pipe(sizeOf.imageSize(image), R.prop('height', 'width'))


// const readSizeOfImages = image => R.pipe(sizeOf(image, function (err, dimensions) {
//     console.log(dimensions.width, dimensions.height)
// }))

export {readBbox, readSizeOfImages}
// export{readBbox, readSizeOfImages, statOfImages};




