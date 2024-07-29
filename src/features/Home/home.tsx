import React from 'react';
import { Header } from './header';
import { TopItemsSection } from './topItemsSection';
import { QuestionsSection } from './questionsSection';

export const Home = () => {
    return (
        <main className='border border-black max-w-[1232px] m-auto'>
            <Header />
            <TopItemsSection />
            <QuestionsSection/>
        </main>
    );
};

