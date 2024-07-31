import React, { useState } from 'react';
import bit from '../../common/Images/bit.svg';
import mcAfee from '../../common/Images/mcAfee.svg';
import truste from '../../common/Images/truste.svg';
import header1 from '../../common/Images/Header/header1.svg';
import price from '../../common/Images/Header/price.svg';
import xd1 from '../../common/Images/bit.svg';
import xd2 from '../../common/Images/mcAfee.svg';
import xd3 from '../../common/Images/bit.svg';

export const Header = () => {
    const [mainImg, setMainImg] = useState(xd1);
    const thumbnails = [xd1, xd2, xd3];

    return (
        <header className='flex justify-center gap-[21px] items-center ml-[27px] '>
            <div className='relative'>
                <img src={price} alt='price' className='absolute top-[-45px] right-[-44px] max-w-60 w-full' />

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

            </div>
            <div className='max-w-[687px] w-full'>
                <div className='text-darkGreen'>
                    <h1 className='text-[52px] font-extrabold leading-[55px] mb-2'>Chance to win a StockX <p className='m-0'>Mystery Box today!</p></h1>
                    <span className='text-[22px] font-normal leading-[25.78px]'>Unleash the Excitement of Mystery Electronics</span>
                </div>
                <form className='border border-grey rounded-[20px] px-[24px] py-6 mt-[23px] grid gap-4'>
                    <p className='m-0 text-[32px] text-darkGreen text-center'>Enter details</p>
                    <div className='flex gap-4 justify-between'>
                        <input
                            className='px-4 py-3 w-full border rounded-[10px] border-darkGrey focus:border-white'
                            placeholder='Name' />
                        <input
                            className='px-4 py-3 w-full border rounded-[10px] border-darkGrey focus:border-white'
                            placeholder='Last name' />
                    </div>

                    <input
                        className='px-4 py-3 w-full border rounded-[10px] border-darkGrey focus:border-white'
                        placeholder='Street'
                    />

                    <div className='flex gap-4 justify-between'>
                        <input
                            className='px-4 py-3 w-full border rounded-[10px] border-darkGrey focus:border-white'
                            placeholder='Postal code' />
                        <input
                            className='px-4 py-3 w-full border rounded-[10px] border-darkGrey focus:border-white'
                            placeholder='City' />
                    </div>

                    <input
                        className='px-4 py-3 w-full border rounded-[10px] border-darkGrey focus:border-white'
                        placeholder='Phone number'
                    />

                    <input
                        className='px-4 py-3 w-full border rounded-[10px] border-darkGrey focus:border-white'
                        placeholder='E-mail'
                    />

                    <button className='w-full bg-green rounded-[10px] py-3 text-white font-semibold text-[#ffffff] '>PROCED TO PAYMENT</button>

                    <div className='flex justify-center gap-4'>
                        <img className='w-24' src={mcAfee} alt='mcAfee' />
                        <img className='w-24' src={truste} alt='truste' />
                        <img className='w-24' src={bit} alt='256 bit' />
                    </div>
                </form>

            </div>
        </header>
    );
};

