import React from 'react';
import bit from '../../../common/Images/bit.svg';
import mcAfee from '../../../common/Images/mcAfee.svg';
import truste from '../../../common/Images/truste.svg';
import { Carousel } from './carousel';

const images = [
    { src: mcAfee, alt: 'mcAfee' },
    { src: truste, alt: 'truste' },
    { src: bit, alt: '256 bit'},
];

export const Header = () => {
    return (
        <header className='md:flex justify-center gap-[21px] items-center ml-[27px]'>
            <Carousel />
            <div className='max-w-[687px] w-full'>
                <div className='text-darkGreen'>
                    <h1 className='md:text-[52px] text-3xl md:text-left text-center font-extrabold md:leading-[55px] mb-2'>
                        Chance to win a StockX
                        <p className='m-0'>Mystery Box today!</p>
                    </h1>
                    <span className='text-[22px] font-normal leading-[25.78px]'>
                        Unleash the Excitement of Mystery Electronics
                    </span>
                </div>
                <form className='border border-grey rounded-[20px] px-[24px] py-6 mt-[23px] grid gap-4 m-auto'>
                    <p className='m-0 text-[32px] text-darkGreen text-center'>Enter details</p>
                    <div className='flex gap-4 justify-between'>
                        <input
                            className='px-4 py-3 w-full border rounded-[10px] border-darkGrey outline-green'
                            placeholder='Name'
                        />
                        <input
                            className='px-4 py-3 w-full border rounded-[10px] border-darkGrey outline-green'
                            placeholder='Last name'
                        />
                    </div>
                    <input
                        className='px-4 py-3 w-full border rounded-[10px] border-darkGrey outline-green'
                        placeholder='Street'
                    />
                    <div className='flex gap-4 justify-between'>
                        <input
                            className='px-4 py-3 w-full border rounded-[10px] border-darkGrey outline-green'
                            placeholder='Postal code'
                        />
                        <input
                            className='px-4 py-3 w-full border rounded-[10px] border-darkGrey outline-green'
                            placeholder='City'
                        />
                    </div>
                    <input
                        className='px-4 py-3 w-full border rounded-[10px] border-darkGrey outline-green'
                        placeholder='Phone number'
                    />
                    <input
                        className='px-4 py-3 w-full border rounded-[10px] border-darkGrey outline-green'
                        placeholder='E-mail'
                    />
                    <button className='w-full bg-green rounded-[10px] py-3 font-semibold text-[#ffffff]'>
                        PROCEED TO PAYMENT
                    </button>
                    <div className='flex justify-center gap-4'>
                        {images.map((image, index) => (
                            <img key={index} className='md:w-24 w-16' src={image.src} alt={image.alt} />
                        ))}
                    </div>
                </form>
            </div>
        </header>
    );
};
