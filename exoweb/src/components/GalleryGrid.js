import React, { useEffect } from 'react';
import './GalleryGrid.css';
import CloseIcon from '../img/icons/close.svg';
import images from '../img/gallery/compressed/imageData';

const GalleryGrid = () => {
    const data = images.map((img, index) => ({
        id: index,
        imgSrc: img.src,
    }));

    const [model, setModel] = React.useState(false);
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const openModal = (index) => {
        setCurrentIndex(index);
        setModel(true);
    };

    const closeModal = () => {
        setModel(false);
    };

    const showPrev = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? data.length - 1 : prev - 1
        );
    };

    const showNext = () => {
        setCurrentIndex((prev) =>
            prev === data.length - 1 ? 0 : prev + 1
        );
    };

    useEffect(() => {
        if (!model) return;

        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') showPrev();
            if (e.key === 'ArrowRight') showNext();
            if (e.key === 'Escape') closeModal();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [model]);

    return (
        <div>
            <div className={model ? "model open" : "model"}>
                {model && (
                    <>
                        <img src={data[currentIndex].imgSrc} alt="gallery" />

                        <button className="close-button" onClick={closeModal}>
                            <img src={CloseIcon} alt="Close" />
                        </button>

                        <button className="arrow left" onClick={showPrev}>
                            ‹
                        </button>

                        <button className="arrow right" onClick={showNext}>
                            ›
                        </button>
                    </>
                )}
            </div>

            <div className="gallery">
                {data.map((item, index) => (
                    <div
                        key={item.id}
                        className="pics"
                        onClick={() => openModal(index)}
                    >
                        <img src={item.imgSrc} style={{ width: '100%' }} alt="gallery" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GalleryGrid;
