import React from 'react'
import orderimage from '../../../assets/TrendingProductsWearings.jpeg'

const OrderCard = () => {
  return (
    <div className=' flex items-center justify-between border border-light-text-color shadow-lg px-20 py-20 ' >
        <div className=' flex items-center ' >
            <img className=' w-28 h-28 object-cover ' src={orderimage}/>
        <h1 className=' text-3xl' >product name</h1>
        </div>
                
                <p className=' text-3xl' >price</p>
                <p className=' text-3xl' >order status</p>

            </div>
  )
}

export default OrderCard