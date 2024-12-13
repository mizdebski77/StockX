import React from 'react';
import { TopItemsSection } from './topItemsSection';
import { QuestionsSection } from './questionsSection';
import { Header } from './Header/header';

export const Home = () => {
    return (
        <main className='border border-black  m-auto py-4'>
            <Header />
            <TopItemsSection />
            <QuestionsSection />
        </main>
    );
};

