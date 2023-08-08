import React from 'react';

import './Title.css'

const Title = ({ data }) => {
    return (
        <div className='titleMessage'>
            <h1>
                Bonjour <span>{data.firstName}</span>
            </h1>
            <p>Félicitations ! Vous avez explosé vos objectifs hier 👏 !</p>
        </div>
    );
};

export default Title;