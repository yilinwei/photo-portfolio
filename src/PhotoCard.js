import React, { Component } from 'react';

//Class defining photocard
class PhotoCard extends Component {
    constructor(mipmap) {
        super();
        this.mipmap = mipmap;        
    }

    render() {
        return (
            <div className="PhotoCard"></div>
        );
    }
}

export default PhotoCard
