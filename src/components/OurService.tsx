import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function OurService() {
  const services = [
    {
      name: 'SPA THERAPY',
      path: '/images/spa_therapy-2.jpg',
      content:
        'Sed egestas quam sed dui semper, et mollis risus scelerisque. Vestibulum bibendum tellus sit amet sodales rutrum. Vivamus ultrices sapien blandit neque lacinia euismod.',
      link: '/',
    },
    {
      name: 'GIFT CARD',
      path: '/images/product-1.jpg',
      content:
        'In porttitor ligula a tortor mollis blandit. Nunc vulputate arcu eros, quis varius ligula sagittis vitae. Aenean condimentum lorem est',
      link: '/',
    },
    {
      name: 'SOAP MAKING',
      path: '/images/product-2.jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in feugiat eros. Morbi pharetra feugiat tortor, rhoncus tincidunt augue elementum in.',
      link: '/',
    },
  ];

  return (
    <section id='our_service' className='grid grid-cols-1 gap-6'>
      <article
        id='our_service_title'
        className='grid justify-items-center gap-3'
      >
        <h2 className='text-2xl font-normal text-charcoal'>OUR SERVICES</h2>
        <p className='text-center text-gray-500'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at
          fermentum velit, id malesuada lacus. Sed lobortis condimentum turpis
          efficitur vulputate.
        </p>
      </article>

      <article
        id='our_service_card'
        className='grid gap-3 md:grid-cols-3 lg:gap-6'
      >
        {services.map((service) => (
          <div key={service.name} className='grid grid-rows-1 gap-3'>
            <div className='relative h-60 w-full overflow-hidden rounded-xl lg:h-80'>
              <Image
                alt={service.name}
                src={service.path}
                objectFit='cover'
                layout='fill'
                objectPosition='bottom'
              />
            </div>
            <div className='mb-8 grid content-start items-center gap-2 text-center'>
              <h4 className='font-normal text-charcoal'>{service.name}</h4>
              <p className='text-gray-500 md:hidden'>{service.content}</p>

              <p className='hidden text-sm text-gray-500 md:block'>
                {service.content.substring(0, 80) + '...'}
              </p>

              <Link href={service.link} className='text-blue-500'>
                Read more &rarr;
              </Link>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
}
