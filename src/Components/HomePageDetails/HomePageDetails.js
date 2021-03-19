import React from 'react';
import './HomePageDetails.css';


const HomePageDetails = (props) => {
    console.log(props);
    const {url, name, id} = props.riderAttribute;

    const handleClick = () =>{
        
    }

    return (
        <div onClick={() => {handleClick(id)}} className="home-page-details">
        <img style={{width: '60%'}} src={url} alt=""/>
        <h1>{name}</h1>
        
        </div>
    );
};

export default HomePageDetails;