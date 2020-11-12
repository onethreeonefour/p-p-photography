import React from 'react'
import { IMAGES } from './Data'
import { SRLWrapper } from 'simple-react-lightbox'

function GalleryPortfolio() {
    return (
        <div className="gallery-portfolio">
            <h1>Gallery</h1>

            <SRLWrapper>
                <div className="gallery-grid">
                    {IMAGES.map((images, index) => {
                        return <div className="gallery-img-container" key={index}>
                            <img src={images.src} alt={`Gallery Portrait ${index + 1}`} key={index}></img>
                            <div className="centered">{images.name}</div>
                        </div>
                    })}
                </div>
            </SRLWrapper>

        </div >
    )
}

export default GalleryPortfolio
