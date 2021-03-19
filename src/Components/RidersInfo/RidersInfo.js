import React from 'react';
import { useParams } from 'react-router';

const RidersInfo = () => {

    const {riderId} = useParams();
    return (
        <div style={{display: 'flex', justifyContent: 'space-between', margin: '15px'}}>
          <section >
              <div>
                  <input type="text" />
                 <h2> this is first part</h2>
                 <button>Search</button>
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