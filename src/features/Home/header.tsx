import React from 'react';

export const Header = () => {
    return (
        <header className='grid grid-cols-2'>
            <div>react</div>
            <div>
                <div>
                    <h1 className='text-2xl'>Chance to win a StockXMystery Box today!</h1>
                    <span>Unleash the Excitement of Mystery Electronics</span>
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

