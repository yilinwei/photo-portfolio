class PhotoSource {
    constructor(source, width, height) {
        this.source = source;
        this.width = width;
        this.height = height;
    }

    static clampWidth(p1, p2, width) {
        const d1 = Math.abs(p1.width - width);
        const d2 = Math.abs(p2.width - width);
        return (d2 > d1) ? p1 : p2;     
    }
}

export default PhotoSource

