import React, { useState } from 'react';
import img1 from '../../../common/Images/Header/Carousel/img1.svg';
import img2 from '../../../common/Images/Header/Carousel/img2.svg';
import img3 from '../../../common/Images/Header/Carousel/img3.svg';
import img4 from '../../../common/Images/Header/Carousel/img4.svg';

export const Carousel = () => {
    const [mainImg, setMainImg] = useState(img1);
    const [thumbnails, setThumbnails] = useState([img2, img3, img4]);

    const handleThumbnailClick = (clickedThumbnail: string) => {
        setThumbnails(thumbnails.map(thumbnail => (thumbnail === clickedThumbnail ? mainImg : thumbnail)));
        setMainImg(clickedThumbnail);
    };

    return (
        <div className="flex flex-col items-center relative">
            <div className="mb-4 bg-green absolute m-auto rounded-full flex flex-col justify-center items-center py-[45px] px-5 gap-2 md:w-40 w-32 md:max-h-40 max-h-32 md:top-[-16px] right-[0px]">
                <span className='font-bold md:text-[38px] text-[#ffffff]'>$1.99</span>
                <span className='font-normal md:text-[14px] text-sm text-[#ffffff]'>Original value $500</span>
            </div>
            <div className="mb-4 w-full grid">
                <img src={mainImg} alt='header 1' className='md:w-[481px] w-72 md:h-[480px] h-72 m-auto' />
            </div>
            <div className='flex justify-center gap-8 xl:gap-0 xl:justify-between w-full'>
                {thumbnails.map((thumbnail, index) => (
                    <img
                        key={index}
                        src={thumbnail}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full xl:max-w-[132px] max-w-16 h-auto object-cover cursor-pointer border-2 border-green hover:border-blue-500 rounded-xl"
                        onClick={() => handleThumbnailClick(thumbnail)}
                    />
                ))}
            </div>
        </div>
    );
};
