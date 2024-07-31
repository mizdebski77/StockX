import React, { useState } from 'react';
import bit from '../../../common/Images/bit.svg';
import mcAfee from '../../../common/Images/mcAfee.svg';
import truste from '../../../common/Images/truste.svg';
import header1 from '../../../common/Images/Header/header1.svg';
import price from '../../../common/Images/Header/price.svg';
import { Carousel } from './carousel';


export const Header = () => {

    return (
        <header className='flex justify-center gap-[21px] items-center ml-[27px] '>
            <Carousel />


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

