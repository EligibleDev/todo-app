import AddTaskForm from '@/components/AddTaskForm/AddTaskForm';
import ConditionalInterface from '@/components/ConditionalInterface/ConditionalInterface';
import Header from '@/components/Header/Header';
import React from 'react';

const Home = () => {
  return (
    <main>
      <Header />
      <section className='container mx-auto flex flex-col lg:flex-row justify-between py-8 px-8 xl:px-0 gap-6'>
        <div className='w-full lg:w-1/4 border-4 rounded-xl border-purple h-fit'>
          <AddTaskForm />
        </div>

        <div className='w-full lg:w-3/4'>
          <ConditionalInterface />
        </div>
      </section>
    </main>
  );
};

export default Home;