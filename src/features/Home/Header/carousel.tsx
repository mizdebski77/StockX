import React, { useState } from 'react';
import img1 from '../../../common/Images/Header/Carousel/img1.svg';
import img2 from '../../../common/Images/Header/Carousel/img2.svg';
import img3 from '../../../common/Images/Header/Carousel/img3.svg';
import img4 from '../../../common/Images/Header/Carousel/img4.svg';

export const Carousel = () => {
    const [mainImg, setMainImg] = useState(img1);
    const thumbnails = [img1, img2, img3, img4];

    return (

        <div className="flex flex-col items-center">
            <div className="main-image mb-4">
                <img src={mainImg} alt='header 1' className='max-w-[481px] w-full h-[644px]' />
            </div>
            <div className="thumbnails flex space-x-2">
                {thumbnails.map((thumbnail, index) => (
                    <img
                        key={index}
                        src={thumbnail}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-20 h-20 object-cover cursor-pointer border-2 border-transparent hover:border-blue-500"
                        onClick={() => setMainImg(thumbnail)}
                    />
                ))}
            </div>
        </div>

    );
};

