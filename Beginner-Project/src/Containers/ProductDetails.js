import React,{useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  const {productId}=useParams()
  console.log(productId);
  return (
    <div>
      <h1>ProductDetails</h1>
    </div>
  )
}

export default ProductDetails