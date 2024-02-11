import AddTaskForm from '@/components/AddTaskForm/AddTaskForm';
import Header from '@/components/Header/Header';
import React from 'react';

const Home = () => {
  return (
    <main>
      <Header />
      <section className='container mx-auto flex justify-between py-8'>
        <div className='w-1/4 border-4 rounded-xl border-purple'>
          <AddTaskForm />
        </div>
        <div className='w-[37.5%]'></div>
        <div className='w-[37.5%]'></div>
      </section>
    </main>
  );
};

export default Home;