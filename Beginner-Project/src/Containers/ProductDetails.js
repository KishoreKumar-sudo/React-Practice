import React, { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectedproduct } from '../Redux/Actions/productAction'

const ProductDetails = () => {
  const product=useSelector((state)=>state.product)
  const { productId } = useParams()
  const dispatch = useDispatch()
  console.log(productId);

  const fetchProductDetails = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("Err", err)
      })
    dispatch(selectedproduct(response.data))
  }
  return (
    <div>
      <h1>ProductDetails</h1>
    </div>
  )
}

export default ProductDetails