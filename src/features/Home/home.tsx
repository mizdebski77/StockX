import React from 'react';
import { TopItemsSection } from './topItemsSection';
import { QuestionsSection } from './questionsSection';
import { Header } from './Header/header';

export const Home = () => {
    return (
        <main className='border border-black max-w-[1232px] m-auto py-4'>
            {/* <Header /> */}
            <TopItemsSection />
            <QuestionsSection />
        </main>
    );
};

