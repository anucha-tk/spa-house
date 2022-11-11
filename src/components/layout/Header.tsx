import * as React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';
import { TbPlant2 } from 'react-icons/tb';

import Drawer from '@/components/layout/Drawer';
import UnstyledLink from '@/components/links/UnstyledLink';

type Links = {
  href: string;
  label: string;
  type: 'button' | 'a';
  buttonStyle?: string;
}[];

const links: Links = [
  {
    href: '/',
    type: 'a',
    label: 'Services',
  },
  {
    href: '/shop',
    type: 'a',
    label: 'Shop',
  },
  {
    href: '/',
    type: 'a',
    label: 'About Us',
  },
  {
    href: '/',
    type: 'a',
    label: 'Blogs',
  },
];

const buttonLinks: Links = [
  {
    href: '/',
    type: 'button',
    label: 'Contact Us',
    buttonStyle: 'buttonContained w-full bg-charcoal text-white',
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  function closeDrawer() {
    setIsOpen(!isOpen);
  }

  const navButton = (
    <>
      {buttonLinks.map(({ href, label, type, buttonStyle: style }) => (
        <div key={label}>
          {type === 'a' ? (
            <UnstyledLink href={href} className='hover:text-gray-500 '>
              {label}
            </UnstyledLink>
          ) : (
            <button className={style}>{label}</button>
          )}
        </div>
      ))}
    </>
  );

  const navLinks = (
    <>
      {links.map(({ href, label, type, buttonStyle: style }) => (
        <div key={label}>
          {type === 'a' ? (
            <UnstyledLink
              href={href}
              className='ml-3 text-sm text-charcoal hover:text-gray-500'
            >
              {label}
            </UnstyledLink>
          ) : (
            <button className={style}>{label}</button>
          )}
        </div>
      ))}
    </>
  );
  return (
    <header className='sticky top-0 z-50 bg-white'>
      <div className='layout flex h-14 items-center justify-between'>
        <div className='flex h-full items-center space-x-2'>
          <TbPlant2 className='h-6 w-6 cursor-pointer rounded-lg border-2 p-1 text-charcoal md:h-10 md:w-10' />
          <UnstyledLink
            href='/'
            className='font-bold text-charcoal hover:text-gray-500'
          >
            HOMESKINCARE
          </UnstyledLink>

          <ul className='hidden items-center justify-items-center md:grid md:auto-cols-fr md:grid-flow-col md:gap-2'>
            {navLinks}
          </ul>
        </div>
        <nav>
          <AiOutlineMenu
            className='flex h-8 w-8 cursor-pointer fill-orange-500 md:hidden'
            onClick={closeDrawer}
          />
          <ul className='hidden items-center md:grid md:auto-cols-fr md:grid-flow-col md:gap-4'>
            {navButton}
          </ul>
          <div
            className={
              isOpen
                ? 'fixed left-0 top-0 h-screen w-full bg-black/70 md:hidden'
                : ''
            }
          >
            <Drawer isOpen={isOpen} closeDrawer={closeDrawer}>
              <div className='layout my-4 flex h-14 w-full items-center justify-between'>
                <div className='flex h-full items-center space-x-2'>
                  <TbPlant2 className='h-6 w-6 cursor-pointer rounded-lg border-2 p-1 text-charcoal md:h-10 md:w-10' />
                  <UnstyledLink
                    href='/'
                    className='font-bold hover:text-gray-600'
                  >
                    Movies
                  </UnstyledLink>
                </div>
                <MdClose
                  className='h-8 w-8 cursor-pointer fill-orange-500'
                  onClick={closeDrawer}
                />
              </div>
              <ul className='grid items-center gap-3'>
                {navLinks}
                {navButton}
              </ul>
            </Drawer>
          </div>
        </nav>
      </div>
    </header>
  );
}
