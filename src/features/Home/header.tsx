import React from 'react';

export const Header = () => {
    return (
        <header className='grid grid-cols-2'>
            <div>react</div>
            <div className='mt-1'>
                <div className='text-darkGreen'>
                    <h1 className='text-[52px] font-extrabold leading-[55px]'>Chance to win a StockXMystery Box today!</h1>
                    <span className='text-[22px] font-normal leading-[25.78px]'>Unleash the Excitement of Mystery Electronics</span>
                </div>
                <form>
                    <span>Enter details</span>
                    <div>
                        <input />
                        <input />
                    </div>
                    <input />
                    <div>
                        <input />
                        <input />
                    </div>
                    <input />
                    <input />
                    <button>Proceed to payment</button>
                </form>
            </div>
        </header>
    );
};

