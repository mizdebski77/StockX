import React, { useState } from 'react';
import payment from '../../common/Images/payment.svg';

export const QuestionsSection = () => {

    const questions = [
        { title: 'How can I win?', article: 'Thanks to your membership, you also participate in our contest to win the iPhone15. We sellect a winner among every 600 participants. The next winner will be selected on 06.10.2023, and will be notified directly by e-mail. If the reward is out of stock, the winner will receive a similar product of equal or greater value instead.' },
        { title: 'No hidden fees?', article: 'We ensure that our members are provided with a detailed history of transactions so that they know exactly what they are paying for. Credit card information is only required to facilitate future purchases. There will be no charges on your credit card statement if you do not upgrade to PREMIUM membership and do not make a purchase.' },
        { title: 'Why do we need your billing information?', article: "By joining this service, you will receive a 5-day trial of our partner's program. If you continue with a subscription beyond the 5-day trial period, you will be charged an amount on your credit card which varies depending on the choice of the tariff. When your contribution is deducted from your credit card or other payment method, you will have access to these services which are reserved exclusively for members of our partner's website." }
    ]
    return (
        <section className=' w-full  mt-12'>
            <div className='bg-[#F5F5F5] grid md:grid-cols-3 md:text-left text-center px-4 py-6  gap-8'>
                {questions.map((question) => (
                    <div key={question.title} className=''>
                        <span className='text-base font-semibold'>{question.title}</span>
                        <p className='text-[10px]'>{question.article}</p>
                    </div>
                ))}

            </div>

            <div className='grid items-center'>
                <p className='text-center mt-4 text-base mb-1'>We accept the following credit cards</p>
                <img src={payment} alt='payment' className='max-w-[1200px] w-full' />
            </div>
        </section>
    );
};

