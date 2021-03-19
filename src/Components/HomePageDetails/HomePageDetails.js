import React from 'react';
import { useHistory } from 'react-router';
import './HomePageDetails.css';


const HomePageDetails = (props) => {
    console.log(props);
    const {url, name, id} = props.riderAttribute;

   const history = useHistory();
    const handleOnClickFunction = (hello) =>{
        const url = `/rider/${hello}`;
        history.push(url);
    }


    return (
        <div onClick={()=>{handleOnClickFunction(id)}} className="home-page-details">
        <img style={{width: '60%'}} src={url} alt=""/>
        <h1>{name}</h1>
        
        </div>
    );
};

export default HomePageDetails;