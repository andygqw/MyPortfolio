import React from 'react';
import ImagePath1 from '../static/portfolio1.webp';
import ImagePath2 from '../static/portfolio2.webp';
import '../static/FloatingImage.css';

const FloatingImage = () => {
    return (
        <div>
            <div className="image2">
                <img
                    src={ImagePath1}
                    alt="bag"
                />
            </div>
            <div className="image1">
                <img
                    src={ImagePath2}
                    alt="folder"
                />
            </div>
        </div>
    );
};

export default FloatingImage;
