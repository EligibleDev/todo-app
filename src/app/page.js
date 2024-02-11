"use client";

import Header from '@/components/Header/Header';
import { UtilsContext } from '@/providers/UtilsProvider/UtilsProvider';
import React, { useContext } from 'react';

const Home = () => {
  const { value } = useContext(UtilsContext)

  return (
    <main>
      <Header />
      <section className='container flex justify-between'>
        <div className='w-1/4'></div>
        <div className='w-[37.5%]'></div>
        <div className='w-[37.5%]'></div>
      </section>
    </main>
  );
};

export default Home;