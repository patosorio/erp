import React from 'react';
import Signup from '../@/components/Signup';

// src={`${process.env.PUBLIC_URL}/assets/logos/vertical_gris.svg`}
const Main: React.FC = () => {
    return (
        
        <div className='w-full h-screen flex items-center justify-center px-4'>
            <img className="absolute top-20 w-40" src={process.env.PUBLIC_URL + '/static/img/pastilla_gris.svg'} />
            <Signup />
        </div>
    );
};

export default Main;