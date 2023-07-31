import React from 'react';

import Yoga from '@/Assets/images/LeftbarSVG/yoga.svg'
import Swim from '@/Assets/images/LeftbarSVG/swim.svg'
import Bike from '@/Assets/images/LeftbarSVG/bike.svg'
import Weight from '@/Assets/images/LeftbarSVG/weight.svg'

import './Leftbar.css'

const Leftbar = () => {
    return (
        <section className='leftbar'>
            <div className='icons-leftbar'>
                <img src={Yoga} alt='Yoga icon' />
                <img src={Swim} alt='Swim icon' />
                <img src={Bike} alt='Bike icon' />
                <img src={Weight} alt='Weight icon' />
            </div>
            <div className='copyright-box'>
                <p className='copyright'>
                    Copyright, SportSee 2020
                </p>
            </div>
        </section>
    );
};

export default Leftbar;