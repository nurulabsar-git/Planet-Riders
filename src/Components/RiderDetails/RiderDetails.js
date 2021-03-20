import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import FakeData from '../FakeData/MOCK_DATA.json';
import RidersInfo from '../RidersInfo/RidersInfo';

const RiderDetails = () => {
    // console.log("This is fake data", FakeData);
    const {detailsId} = useParams();
    // console.log(detailsId);
    const [riderDetails, setRiderDetails] = useState([]);
    console.log(riderDetails);

    useEffect(() => {
        let url = FakeData;
        fetch(url)
        const selectedRider = FakeData.find(pd => pd.id === detailsId);
        console.log("Selected Rider",selectedRider);
        setRiderDetails(selectedRider);
    }, [])

    return (
        <div>
           {/* { riderDetails.map(pd => <p>{pd.name}</p>)} */}
        </div>
    );
};

export default RiderDetails;