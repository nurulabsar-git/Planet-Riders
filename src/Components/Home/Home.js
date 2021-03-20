import React, { useEffect, useState } from 'react';
import FakeData from '../FakeData/MOCK_DATA.json';
import HomePageDetails from '../HomePageDetails/HomePageDetails';
import './Home.css'

const Home = () => {

    const [riders, setRiders] = useState([]);
    useEffect(() => {
       setRiders(FakeData);
    }, [])
    return (
       <div>
           
            <div className="container">
            {
                riders.map(rider => <HomePageDetails riderAttribute = {rider}></HomePageDetails>)
            }
        </div>
       </div>
    );
};

export default Home;