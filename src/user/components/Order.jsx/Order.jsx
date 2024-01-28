import React, { useState } from 'react'
import OrderCard from './OrderCard'
import menu from '../../../assets/menus.png'

const Order = () => {
    const OrderStatus = [
        {label: 'On The Way' , value: 'on_the_way' },
        {label: 'Delivered' , value: 'delivered' },
        
    ]
    const [isOpenMenu, setIsOpenMenu] = useState(true);

    const handleClick = () => {
        setIsOpenMenu(!isOpenMenu)
    }
    
  return (
    <div className=' grid grid-cols-4 ' >
        <div className=' col-span-1' >
            <h1>Order Filter</h1>

            <button className=' block sm:hidden ' onClick={handleClick} >
                <img className='w-10 h-10 bg-primarycolor ' src={menu}/>
            </button>

            {isOpenMenu && 
            <div className=' ' >
            
            {OrderStatus.map((option) => (
  <div key={option.value} className='flex items-center'>
    <input id={option.value} defaultValue={option.value} type='checkbox' className='h-8 w-8 border-primarycolor border text-primarycolor focus:ring-offset-light-text-color'></input>
    <label htmlFor={option.value} className='ml-5 text-xl text-light-text-color'>
      {option.label}
    </label>
  </div>
))}
</div>
            }


            
        </div>
        <div className=' col-span-3 space-y-10 ' >
            {[1,1,1].map(() => <OrderCard/>)}
        </div>
    </div>
  )
}

export default Order