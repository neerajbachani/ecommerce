
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, selectedSubcategories }) => {
  const {id, name, image, price } = product;
  // Filter products based on selected subcategories
  
  // const filteredProducts = product.filter(product => {
  //   // If no subcategories are selected, show all products
  //   if (selectedSubcategories.length === 0) {
  //     return true;
  //   }
  //   // Show products that match at least one selected subcategory
  //   return selectedSubcategories.includes(product.subCategory);
  // });

  return (
    <div >
    <section className=' flex flex-wrap   gap-12  ' >
   
          <Link to={`/product-details/${product.id}`} key={product.id}>
            {/* Wrap the product card with Link */}
            <div>
              <div className='w-[25rem] h-[30rem]'>
                <img className='object-cover w-full h-full' src={`${image}`} alt={`product-${id}`} />
              </div>
              <p className='font-poppins max-w-xs text-3xl'>{name}</p>
              <p className='font-poppins text-xl'>{price}</p>
              {/* <p className='font-poppins text-xl'>{product.description}</p> */}
              {/* ... other product details */}
            </div>
          </Link>
    

    </section>
    </div>
  );
}

export default ProductCard;



