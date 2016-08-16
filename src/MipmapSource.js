import PhotoSource from './PhotoSource.js'

class MipmapSource {

    constructor(source) {
        this.sources = [source];
    }

    add(source) {
        this.sources.push(source);
    }

    clampWidth(width) {
        return this.sources.reduce(PhotoSource.clampWidth);
    }
}

export default MipmapSource
