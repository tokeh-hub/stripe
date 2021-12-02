import React from 'react'
import phone from './images/phone.svg'
import useGlobalContext from './context'

export default function Hero() {
    const {closeSubmenu} = useGlobalContext()
    
    return (
        <section className='hero' onMouseOver={closeSubmenu}>
            <div className='hero-center'>
                <article className='hero-info'>
                    <h1>Payment Infrastructure for the Internet</h1>
                    <p> Millions of companies of all sizes—from startups to Fortune 500s—use
                        Stripe’s software and APIs to accept payments, send payouts, and
                        manage their businesses online.</p>
                    <button className='btn'>Start now</button>
                </article>
                <article className='hero-images'>
                    <img src={phone} alt='phone'></img>
                </article>
            </div>
          
        </section>
    )
}
