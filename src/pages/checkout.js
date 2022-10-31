
import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'
import CheckoutProduct from '../components/CheckoutProduct'
import Header from '../components/Header'
import { selectItems, selectTotal } from '../slices/basketSlice'
import Currency from "react-currency-formatter";
import {useSession, signIn} from 'next-auth/react';
import {loadStripe } from '@stripe/stripe-js'
const stripePromise = loadStripe()

function checkout() {
  const items = useSelector(selectItems)
  const total = useSelector(selectTotal)
  const {data: session} = useSession()

  const createCheckoutSession = () => {

  }

  return (
    <section className='bg-gray-100'>
        <Header/>
        <main className='lg:flex max-w-screen-4xl mx-auto'>
            {/* leftside */}
            <div className='flex-grow m-5 shadow-sm'>
                <Image
                src='https://links.papareact.com/ikj' alt=''
                width={1020}
                height={250}
                objectfit='contain'
                />
                <div className='flex flex-col p-5 space-y-10 bg-white'>
                    <h1 className='text-3xl border-b pb-4'>
                    {items.length === 0 ? 'your basket is Empty' : 'Your shopping basket'}
                    </h1>
                    {items.map((item, i) => (
                      <CheckoutProduct 
                      key={i}
                      id={item.id}
                      title={item.title}
                      rating={item.rating}
                      price={item.price}
                      description={item.description}
                      category={item.category}
                      image={item.image}
                      hasP={item.hasPrime}
                      />
                    ))}
                </div>
            </div>
            {/* right side */}
            <div className='flex flex-col bg-white p-10 shadow-md'> 
              {items.length > 0 &&(
                <>
                <h2 className='whitespace-nowrap'>Subtotal ({items.lenght} items ):
                <span>
                  <Currency quantity={total} currency='USD'/>
                  </span>
                   </h2>
                <button 
                role='link'
                onClick={createCheckoutSession}
                disabled={!session}
                className={`batton mt-2 ${!session && 'fromgray-300 to-gray-400 border-gray-200 text-gray-300 cursor-not-allowed'}`}>
                  {!session ? 'Sign in to payments' : 'proceed to payments'}
                </button>
                </>
              ) }
            </div>
        </main>
    </section>
  )
}

export default checkout