import React from 'react';
import MarketCarousel from '../components/MarketCarousel';
import StakingList from '../components/StakingList';


export default function stake() {
  return (
    <>
      <div className="container-fluid p-0 m-0">
        <div className="row col-12 d-flex justify-content-center p-0 m-0">
          {/* <div className="col-md-12">
            <MarketCarousel />
          </div> */}
          
          <div className='col-lg-8 col-md-10 col-sm-11 mt-5 p-2'>
          <p className='h2 text-warning'>Staking</p>
            <StakingList />
          </div>
        </div>
      </div>
    </>
  );
}
