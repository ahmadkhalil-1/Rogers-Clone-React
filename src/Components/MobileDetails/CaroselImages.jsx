import React, { useState, useEffect } from 'react';
import './CaroselImage.css';

const ImageCarousel = ({ selectedColor }) => {
    const images = {
        pink: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMmMwyWGiQWJaqHKr8d0kfQv36YUzXOqv-lOtiGFsKHL1HWEUYmJEl0bWxcEj-DMunP2k&usqp=CAU',
            'https://qskinz.com/cdn/shop/files/pink_1_00cd276b-d962-407e-8ede-5fede9c0181d.png?v=1695740805',
            'https://qskinz.com/cdn/shop/files/pink_1_7105ea2c-8cdf-4a67-bdc7-553dc95750a1.png?v=1695740847'
        ],
        gray: [
            'https://regen.pk/cdn/shop/products/iphone-12-pro-321394.jpg?v=1683285371',
            'https://i0.wp.com/www.appleshop.pk/wp-content/uploads/2020/04/Apple-iPhone-11-Pro-Max-Space-Gray.png?fit=470%2C556&ssl=1',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCO8TjfF5DxYIC3G9SU3O4Q8fUC1Y4SPCtCw&s'
        ],
        green: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNr4KBp_93_arAvt3wtruXU5xXBAdvclOhgg&s',
            'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-green-witb-202203_FMT_WHH?wid=560&hei=744&fmt=jpeg&qlt=90&.v=1644964732535',
            'https://www.pakmobizone.pk/wp-content/uploads/2022/05/Apple-iphone-13-Pro-Max-Alpine-Green-3.jpg'
        ]
    };

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isSliding, setIsSliding] = useState(false);

    useEffect(() => {
        setCurrentIndex(0);
    }, [selectedColor]);

    const changeSlide = (newIndex) => {
        if (newIndex >= 0 && newIndex < images[selectedColor].length) {
            setIsSliding(true);
            setTimeout(() => {
                setCurrentIndex(newIndex);
                setIsSliding(false);
            }, 200);
        }
    };

    const nextSlide = () => {
        const newIndex = currentIndex + 1;
        if (newIndex < images[selectedColor].length) {
            changeSlide(newIndex);
        }
    };

    const prevSlide = () => {
        const newIndex = currentIndex - 1;
        if (newIndex >= 0) {
            changeSlide(newIndex);
        }
    };

    return (
        <div className="carousel-container">
            <button className="nav-button prev" onClick={prevSlide} disabled={currentIndex === 0}>{'<'}</button>
            <div className="carousel-content">
                <div className="main-image">
                    <img
                        src={images[selectedColor][currentIndex]}
                        alt="Main"
                        className={isSliding ? 'sliding-out' : ''}
                    />
                </div>
                <div className="thumbnail-container">
                    {images[selectedColor].map((image, index) => (
                        <div
                            key={index}
                            className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => changeSlide(index)}
                        >
                            <img src={image} alt={`Thumbnail ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
            <button className="nav-button next" onClick={nextSlide} disabled={currentIndex === images[selectedColor].length - 1}>{'>'}</button>
        </div>
    );
};

export default ImageCarousel;