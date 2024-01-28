import AddressCard from '../CheckOut.jsx/AddressCard'
import React from 'react';
import OrderTracker from './OrderTracker';
import orderimage from '../../../assets/TrendingProductsWearings.jpeg'


const OrderDetails = () => {
  

  return (
    <div>
        <AddressCard/>


        <div className=' mt-10 max-w-7xl mx-auto border border-secondarycolor shadow-inner p-10 ' >   
    
    <OrderTracker/>
    </div>
    {[1,1,1].map((item)=> (
            <div className=' mt-10 flex items-center justify-between border border-light-text-color shadow-lg px-20 py-20 ' >
            <div className=' flex items-center ' >
                <img className=' w-28 h-28 object-cover ' src={orderimage}/>
            <h1 className=' text-3xl' >product name</h1>
            </div>
                    
                    <p className=' text-3xl' >price</p>
                    <p className=' text-3xl' >order status</p>
                    <div>
                        {/* <img src={star} /> */}
                        <p className=' text-3xl text-secondary-dark-color ' >Rate & Reviews</p>
                    </div>
    
    </div>
    ))}
    
    </div>
  );
};

export default OrderDetails;
