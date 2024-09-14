import React from 'react';
import '../static/FloatingImage.css';

const FloatingImage = () => {
    return (
        <div>
            <div className="image2">
                <img
                    src="src/static/portfolio1.webp"
                    alt="bag"
                />
            </div>
            <div className="image1">
                <img
                    src="src/static/portfolio2.webp"
                    alt="folder"
                />
            </div>
        </div>
    );
};

export default FloatingImage;
