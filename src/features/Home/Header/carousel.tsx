import React, { useState } from 'react';
import img1 from '../../../common/Images/Header/Carousel/img1.svg';
import img2 from '../../../common/Images/Header/Carousel/img2.svg';
import img3 from '../../../common/Images/Header/Carousel/img3.svg';
import img4 from '../../../common/Images/Header/Carousel/img4.svg';
import price from '../../../common/Images/Header/price.svg';

export const Carousel = () => {
    const [mainImg, setMainImg] = useState(img1);
    const [thumbnails, setThumbnails] = useState([img2, img3, img4]);

    const handleThumbnailClick = (clickedThumbnail: string) => {
        setThumbnails(thumbnails.map(thumbnail => (thumbnail === clickedThumbnail ? mainImg : thumbnail)));
        setMainImg(clickedThumbnail);
    };

    return (
        <div className="flex flex-col items-center relative">
            <img src={price} alt='price' className='absolute top-[-45px] right-[-44px] max-w-52 w-full' />

            <div className="mb-4 w-full">
                <img src={mainImg} alt='header 1' className='w-[481px] h-[480px]' />
            </div>
            <div className=" w-full flex justify-between">
                {thumbnails.map((thumbnail, index) => (
                    <img
                        key={index}
                        src={thumbnail}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full max-w-[132px] h-auto object-cover cursor-pointer border-2 border-green hover:border-blue-500 rounded-xl"
                        onClick={() => handleThumbnailClick(thumbnail)}
                    />
                ))}
            </div>
        </div>
    );
};
