import React from 'react'
import Product from '../components/Product/Product'
import productData from '../productData'
import DeptAndSearch from '../components/DepartmentAndSearch/DeptAndSearch'
// import '../components/Product/product.css'

// import { useSelector } from 'react-redux'



const ProductPage = () => {
  // const productData = useSelector((state) => state.product.products);
  return (
    <>
   
    <DeptAndSearch/>
    <Product productData={productData}  />
    
    
    </>
  )
}

export default ProductPage