import React from 'react';
import Image from 'next/image';
import { SearchIcon, MenuIcon, ShoppingCartIcon } from '@heroicons/react/outline'

function Header() {
  return (
    <header className=''>
        {/* top nav */}
        <div className='flex items-center bg-amazon_blue p-1 flex-grow py-1 '>
            <div className='mt-2 flex items-center flex-grow sm:flex-grow-0 px-2'>
                <Image
                className='cursor-pointer'
                src='https://links.papareact.com/f90'
                width={250}
                height={40}
                objectfit='contain'
                />
            </div>
            {/* search */}
            <div className='hidden sm:flex items-center rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500'>
                <input  className='p-4 w-6 flex-grow rounded-l-md flex-shrink focus:outline-none px-4' type="text" />
                <SearchIcon className='h-12 p-4'/>
            </div>
            {/* right */}
            <div className='text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap'>
                <div className='cursor-pointer link'>
                    <p>Hello Alphonce</p>
                    <p className='font-extrabold md:text-sm'>Account & Lists</p>
                </div>
                <div className='cursor-pointer link'>
                    <p>Returns </p>
                    <p className='font-extrabold md:text-sm'>Orderes</p>
                </div>
                <div className='link relative flex items-center'>
                    <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black'>0</span>
                    <ShoppingCartIcon className='h-10'/>
                    <p className='hidden md:inline font-extrabold md:text-sm'>Basket</p>
                </div>
            </div>
        </div>
        {/* bottom nav */}
        <div className='flex space-x-3 p-2 pl-6 items-center bg-amazon_blue text-white text-sm'>
            <p className='link flex items-center'>
                <MenuIcon className='h-6 mr-1'/>
            </p>
            <p className='link'>Prime Video</p>
            <p className='link'>Amazon Business</p>
            <p className='link'>Today's Build</p>
            <p className='link hidden lg:inline-flex '>Electronics</p>
            <p className='link hidden lg:inline-flex '>Food & grocery</p>
            <p className='link hidden lg:inline-flex '>Buy Again</p>
            <p className='link hidden lg:inline-flex '>Shopper Toolkit</p>
            <p className='link hidden lg:inline-flex '>Health & Personal Care</p>
        </div>
    </header>
  )
}

export default Header