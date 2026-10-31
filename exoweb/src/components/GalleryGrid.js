import React, { useEffect } from 'react';
import './GalleryGrid.css';
import images from '../img/gallery/compressed/imageData';

const GalleryGrid = () => {
    const data = images.map((img, index) => ({
        id: index,
        imgSrc: img.src,
    }));

    const [model, setModel] = React.useState(false);
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const getColumnCount = () => {
        if (window.innerWidth <= 550) return 1;
        if (window.innerWidth <= 991) return 2;
        return 3;
    };
    const [columnCount, setColumnCount] = React.useState(getColumnCount);

    useEffect(() => {
        const handleResize = () => setColumnCount(getColumnCount());
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const columns = Array.from({ length: columnCount }, () => []);
    data.forEach((item, index) => {
        columns[index % columnCount].push({ ...item, index });
    });

    const openModal = (index) => {
        setCurrentIndex(index);
        setModel(true);
    };

    const closeModal = () => {
        setModel(false);
    };

    const showPrev = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) =>
            prev === 0 ? data.length - 1 : prev - 1
        );
    };

    const showNext = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) =>
            prev === data.length - 1 ? 0 : prev + 1
        );
    };

    useEffect(() => {
        if (!model) return;

        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') showPrev(e);
            if (e.key === 'ArrowRight') showNext(e);
            if (e.key === 'Escape') closeModal();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [model]);

    return (
        <div>
            {/* Modal / Lightbox */}
            <div 
                className={model ? "model open" : "model"} 
                onClick={closeModal}
            >
                {model && (
                    <div className="model-content" onClick={(e) => e.stopPropagation()}>
                        <img 
                            src={data[currentIndex].imgSrc} 
                            alt="Agrandissement galerie" 
                            className="model-img"
                        />

                        <button 
                            className="close-button" 
                            onClick={closeModal}
                            aria-label="Fermer"
                        >
                            ×
                        </button>

                        <button 
                            className="arrow left" 
                            onClick={showPrev}
                            aria-label="Image précédente"
                        >
                            ‹
                        </button>

                        <button 
                            className="arrow right" 
                            onClick={showNext}
                            aria-label="Image suivante"
                        >
                            ›
                        </button>
                    </div>
                )}
            </div>

            {/* Grille d'images */}
            <div className="gallery">
                {columns.map((column, colIndex) => (
                    <div key={colIndex} className="gallery-column">
                        {column.map((item) => (
                            <div
                                key={item.id}
                                className="pics"
                                onClick={() => openModal(item.index)}
                            >
                                <img src={item.imgSrc} alt={`Galerie ${item.index + 1}`} />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GalleryGrid;