import AddTaskForm from '@/components/AddTaskForm/AddTaskForm';
import ConditionalInterface from '@/components/ConditionalInterface/ConditionalInterface';
import Header from '@/components/Header/Header';
import IncompleteTasks from '@/components/IncompleteTasks/IncompleteTasks';
import React from 'react';

const Home = () => {
  //counter sort

  return (
    <main>
      <Header />
      <section className='container mx-auto flex justify-between py-8 gap-6'>
        <div className='w-1/4 border-4 rounded-xl border-purple h-fit'>
          <AddTaskForm />
        </div>

        <div className='w-3/4'>
          <ConditionalInterface />
        </div>
      </section>
    </main>
  );
};

export default Home;