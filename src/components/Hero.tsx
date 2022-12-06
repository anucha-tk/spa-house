import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const Hero = () => {
  return (
    <section className='relative grid h-[600px] content-center justify-items-center md:h-[600px] lg:h-[800px]'>
      <article className='layout z-10 mb-16 flex flex-col items-center space-y-4 md:space-y-6'>
        <h2 className='text-center text-white md:text-4xl lg:text-5xl'>
          HOME SKINCARE
        </h2>
        <p className='max-w-xs text-center text-dimWhite md:max-w-none md:text-lg lg:text-xl'>
          Lorem ipsum dolor sit amet, consectetur adipiscing lit. Fusce at
          fermentum velit, id malesuada lacus. Sed lobortis condimentum turpis
          efficitur vulputate.
        </p>
        <div className='grid'>
          <Link
            href='/shop'
            className='buttonContained rounded-full bg-gradient-to-t from-charcoal to-[#595b60] py-4 px-8'
          >
            Shop Now
          </Link>
        </div>
      </article>
      <div className='absolute -mt-16 h-full w-full'>
        <Image
          src='/images/hero.png'
          alt='couple_watch'
          fill
          className='object-cover'
        />
      </div>
    </section>
  );
};
