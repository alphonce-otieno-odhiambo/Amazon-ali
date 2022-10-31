import { StarIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import React from 'react'
import Currency from "react-currency-formatter";
import { useDispatch } from 'react-redux';
import {addToBasket, removeFromBasket} from "../slices/basketSlice"


function CheckoutProduct({
    id, title, price,description, category,image, hasP
}) {

    const dispatch = useDispatch()


    const additemToBasket = () => {
        const product = {
            id, title, price,description, category,image, hasP
        };
        //push items to redux
        dispatch(addToBasket(product))
    }

    const removeitemFromBasket = () => {
        //removes items from redux
        dispatch(removeFromBasket({id}))
    }


  return (
    <div className='grid grid-cols-5'>
        <Image src={image} alt='' height={200} width={200} objectfit='contain'/>
        {/* middle */}
        <div className='col-span-3 mx-5'>
            <p>{title} </p>
            <div>
                <StarIcon className='h-6 text-yellow-500'/>
            </div>
            <p className='text-xs my-2 line-clamp-3'>{description} </p>
            <Currency quantity={price} Currency='USD'/>
            {hasP && (
            <div className='flex items-center space-x-2 -mt-5 '>
                <img 
                className='w-12'
                src='https://links.papareact.com/fdw' alt='' />

                <p className='text-xs text-gray-500'>
                    FREE Next-day  Delivery
                </p>
            </div>
        )}
        </div>
        {/* Right side */}
        <div className='flex flex-col space-y-2 my-auto justify-end'>
                <button onClick={additemToBasket} className='batton'>Add to Basket</button>
                <button onClick={removeitemFromBasket} className='batton'>Remove from basket</button>
        </div>
    </div>
  )
}

export default CheckoutProduct