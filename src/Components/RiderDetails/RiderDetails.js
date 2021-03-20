import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import FakeData from '../FakeData/MOCK_DATA.json';
import RidersInfo from '../RidersInfo/RidersInfo';

const RiderDetails = () => {
    console.log("This is fake data", FakeData);
    const {detailsId} = useParams();
    const [riderDetails, setRiderDetails] = useState({});
    console.log(riderDetails);

    useEffect(() => {
        setRiderDetails(FakeData)
    }, [])

    return (
        <div>
           { riderDetails.map(pd => <RidersInfo RidersInfoAttribute = {pd}></RidersInfo>)}
        </div>
    );
};

export default RiderDetails;