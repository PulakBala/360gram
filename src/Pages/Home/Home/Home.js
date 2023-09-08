import React from 'react';
import Agency from '../Agency/Agency';
import ServicesOne from '../ServicesOne/ServicesOne';
import Feature from '../Feature/Feature';
import OurServices from '../OurServices/OurServices';

const Home = () => {
    return (
        <div>
            <OurServices/>
           <Agency/>
           <ServicesOne/>
           <Feature/>
        </div>
    );
};

export default Home;