import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import './RidersInfo.css';

const RidersInfo = () => {
   
    const {riderId} = useParams();
    console.log("Test", riderId);
    const { register, handleSubmit, watch, errors } = useForm();
    
    return (
        <div style={{display: 'flex', justifyContent: 'space-between', margin: '10px'}}>
          <section >
  <div className="first-part">
 <form>
        <label htmlFor="">Pick From</label>
        <input name="example" ref={register} placeholder="Mirpur-1" style={{width: '90%'}}/> 
        <label htmlFor="">Pick To</label>
        <input name="exampleRequired" ref={register({ required: true })} placeholder="Uttora" style={{width: '90%'}}/>
        {errors.exampleRequired && <span>This field is required</span>} <br/>
      
    </form> <br/>
    <button style={{width: '90%'}}>Search</button>
    </div>
  </section>
          <section>
              <div>
                  <h2>This is second part</h2>
              </div>
          </section>
        </div>
    );
};

export default RidersInfo;