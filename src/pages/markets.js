import React from 'react';
import MarketCarousel from '../components/MarketCarousel';
import MarketsList from '../components/MarketsList';

export default function markets() {
  return (
    <>
      <div className="container-fluid p-0 m-0">
        <div className="row col-12 d-flex justify-content-center p-0 m-0">
          {/* <div className="col-md-12">
            <MarketCarousel />
          </div> */}
          
          <div className='col-lg-8 col-md-10 col-sm-11 mt-5 p-2'>
          <p className='h2 text-warning'>Available Market Pairs</p>
            <MarketsList />
          </div>
        </div>
      </div>
    </>
  );
}
