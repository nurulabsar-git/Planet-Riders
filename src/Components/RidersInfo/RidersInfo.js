import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import './RidersInfo.css';
import FakeData from '../FakeData/MOCK_DATA.json';
import Cat from '../Cat/Cat';

const RidersInfo = (props) => {
    console.log(props);
   
    const {riderId} = useParams();
    
    // const [tickets, setTickets] = useState([]);
    // useEffect(() => {
       
    //    setTickets(FakeData);
    // }, [])

    const anotherHistory = useHistory();
    const handleRidersInfo = (parameter) =>{
        const url = `/details/${parameter}`;
        anotherHistory.push(url)
    //    console.log("Clicked", parameter)
    }

    
    // console.log("Test", riderId);
    const { register, handleSubmit, watch, errors } = useForm();
    
    return (
<div style={{display: 'flex', justifyContent: 'space-between', margin: '10px'}}>
<section>         
  <div className="first-part">
 <form>
        <label htmlFor="">Pick From</label>
        <input name="example" ref={register} placeholder="Mirpur-1" style={{width: '90%'}}/> 
        <label htmlFor="">Pick To</label>
        <input name="exampleRequired" ref={register({ required: true })} placeholder="Uttora" style={{width: '90%'}}/>
        {errors.exampleRequired && <span>This field is required</span>} <br/>
      
    </form> <br/>
    <button onClick = {() =>handleRidersInfo(riderId)} style={{width: '90%'}}>Search</button>
 </div>
</section>
 <section>
              <div>
              <iframe className="map-style" width="520" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Dhaka+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=705d35f602baf995744298787ac1fea5b4d43106'></script>
              </div>
</section>
</div>
    );
};


// const riderKey = Object.keys(FakeData);
// const productB = riderKey.filter(pd => pd.id === riderId);
//  console.log(" id:", productB);
//  setTicket(productB);
// {
//     tickets.map(pd => <Cat pdA = {pd} handleRider={handleRidersInfo}></Cat>)  
//   }

{/* {handleRidersInfo ==='true' ? 
       tickets.map(tk => <div>

           <p>{tk.name}</p>
       </div>) 
     : ''
} */}
    

export default RidersInfo;