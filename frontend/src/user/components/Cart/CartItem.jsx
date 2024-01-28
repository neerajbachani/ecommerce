import React from 'react'
import cartImg from '../../../assets/FeaturedProducts1.jpg'
import minus from '../../../assets/icons8-minus-50.png'
import plus from '../../../assets/icons8-plus-50.png'
import cross from '../../../assets/icons8-cross-50.png'
import { useDispatch, useSelector } from 'react-redux'
import { updateCartItemQuantity, removeItemFromCart } from '../../redux/slice/CartSlice';

const CartItem = ({item}) => {

  const dispatch = useDispatch();

  const handleQuantityChange = (newQuantity) => {
    dispatch(updateCartItemQuantity({ itemId: item.id, quantity: newQuantity }));
  };

  const handleRemoveItem = () => {
    dispatch(removeItemFromCart(item.id));
  };

  return (
<div className=' ' >

    <div className=' mt-10  grid grid-flow-col grid-cols-3 pl-10 pr-3  mx-5 py-10 bg-secondarycolor ' >
        <div className=' col-span-2  '>
        <p className='text-2xl font-poppins ' >Product Name</p>
        </div>
        <div className=' flex justify-between -ml-10 ' >
        <p className='text-2xl font-poppins' >Price</p>
        <p className='text-2xl font-poppins' >Quantity</p>
        <p className='text-2xl font-poppins' >Remove</p>
      

        </div>
        

    </div>
 
    <div className=' grid grid-cols-3  items-center  px-10  mx-5 py-10 bg-light-bg-color -mt-[1rem] ' >
        <div className=' flex gap-8 items-center col-span-2  '>
        <img className=' object-cover w-40 h-40' src={item.image} />
       <p className='text-4xl font-poppins'>{item.name}</p>
        </div>
        <div className=' flex justify-between  ' >
        <p className='text-2xl font-poppins' >{item.price}</p>
        <div className=' flex gap-5 ' >
          <button onClick={() => handleQuantityChange(item.quantity - 1)} >
            <img className=' h-6 w-6' src={minus} />
          </button>
        <p className='text-2xl font-poppins' >{item.quantity}</p>
        <button onClick={() => handleQuantityChange(item.quantity + 1)}>
          <img className=' h-6 w-6' src={plus} />
        </button>

        
        </div>
        
        
       <button onClick={handleRemoveItem}>
          <img className='h-6 w-6' src={cross} />
        </button>
        </div>
    </div>
    </div>
  )
}

export default CartItem