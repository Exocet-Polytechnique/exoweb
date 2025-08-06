import React from 'react';
import './GalleryGrid.css';
import CloseIcon from '../img/icons/close.svg';
import images from '../img/gallery/compressed/imageData';

const GalleryGrid = () => {
    const data = images.map((img, index) => ({
        id: index + 1,
        imgSrc: img.src,
      }));
    const [model, setModel] = React.useState(false);
    const [tempImgSrc, setTempImgSrc] = React.useState('');
    const getImg = (imgSrc) => {
        console.warn(imgSrc);
        setTempImgSrc(imgSrc);
        setModel(true);
    }

    return (
        <div>
        <div className={model ? "model open" : "model"}>
            <img src={tempImgSrc} alt="gallery" />
            <button className="close-button" onClick={() => setModel(false)}>
            <img src={CloseIcon} alt="Close" />
            </button>
            
        </div>

        <div className="gallery">
            {data.map((item) => {
                return (
                    <div key={item.id} className="pics" onClick={() => getImg(item.imgSrc)}>
                        <img src={item.imgSrc} style={{width: '100%'}} alt="gallery" className="gallery__img"/>
                    </div>
                )
            })}
        </div>
        </div>
    );
};

export default GalleryGrid;