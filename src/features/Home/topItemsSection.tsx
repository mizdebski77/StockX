import React from 'react';
import img from '../../common/Images/topSection.svg';
import img2 from '../../common/Images/topSection2.svg';

export const TopItemsSection = () => {
    return (
        <section className='mt-12'>
            <h2 className='md:text-5xl text-3xl text-center font-bold text-darkGreen md:leading-[55px]'>
                Top Tech Mystery Box
                <p>at Unbeatable Prices</p>
            </h2>
            <p className='md:text-xl text-lg text-[#006340] text-center font-medium mt-2'>
                Fast shipping | Easy returns | Special discounts for students
            </p>
            <div className='grid md:grid-cols-2 items-center px-4 mt-8 gap-8'>
                <img src={img} alt='mystery box' className='max-w-[583px] w-full' />
                <div className='text-center md:text-left'>
                    <h3 className='md:text-[42px] text-darkGreen text-3xl font-bold mb-8 md:text-left text-center'>
                        Curious about the <span className='text-[#006340]'>StockX</span>
                        <p className='m-0'> Mystery Box?</p>
                    </h3>
                    <p className='text-darkGreen mb-2'>
                        Experience the thrill of unboxing cutting-edge gadgets with StockX Mystery Boxes. Each box is a treasure trove of high-quality electronics, handpicked to elevate your tech game.
                    </p>
                    <p className='text-darkGreen'>
                        Expect the unexpected! Our boxes are packed with the latest gadgets, from smartphones to gaming consoles, ensuring you get the best tech surprises every time.
                    </p>
                </div>
            </div>
            <div className='grid md:grid-cols-2 items-center px-4 mt-9 gap-8'>
                <div className='text-center md:text-left'>
                    <h4 className='md:text-[42px] text-3xl font-bold mb-8 text-darkGreen'>
                        Why is everyone buzzing
                        <p className='m-0'> about these boxes?</p>
                    </h4>
                    <p className='text-darkGreen mb-2'>
                        StockX Mystery Boxes are not just about products; they’re about the experience. Imagine the excitement of unveiling top-tier electronics at a fraction of the cost.
                    </p>
                    <p className='text-darkGreen'>
                        Our boxes include a variety of premium tech items, making it a must-have for every tech enthusiast. Join the buzz and see why everyone is raving about the unbeatable value and surprise factor of StockX Mystery Boxes!
                    </p>
                </div>
                <img src={img2} alt='mystery box second' className='max-w-[583px] w-full' />
            </div>
        </section>
    );
};
