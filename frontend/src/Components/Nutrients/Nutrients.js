import React from 'react';

import './Nutrients.css'

const Nutrients = ({ data }) => {

    return (
        <div className='nutrients'>
            {
                data.map((nutrient) => {
                    return (
                        <div className='nutrient' key={nutrient.name}>
                            <div className='nutrient-logo'>
                                <img src={nutrient.imageData} alt='nutrient-Logo' />
                            </div>
                            <div className='nutrient-description'>
                                <h2>{nutrient.value}</h2>
                                <p>{nutrient.name}</p>
                            </div>
                        </div>
                    )
                })
            }

        </div >
    );
};

export default Nutrients;