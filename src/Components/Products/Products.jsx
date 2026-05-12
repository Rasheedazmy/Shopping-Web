import React, { useEffect, useState } from 'react';
import { ClimbingBoxLoader } from 'react-spinners';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import axios from 'axios';
import useProducts from '../../Hooks/useProducts';




export default function Products(props) {

  let {data , isError , error , isLoading , isFetching} = useProducts();
  
   if (isLoading)
    {
      return <div className="py-8 w-full flex justify-center">
        <ClimbingBoxLoader color='blue'/>
        </div>
    }
  
    if (isError) {
      return <div className="py-8 w-full flex justify-center">
        <h3>{error}</h3>
      </div>
    }


    
  return <>
    <div className="flex flex-wrap py-5 items-center">
      {data?.data.data.map((product) => <div key={product.id} className="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 px-4">
        <div className="product py-4">
          <Link to={`/productdetails/${product.id}/${product.category.name}`}>

          <img className='w-full' src={product.imageCover} alt={product.title} />
          <span className='blcok font-light mt-2 text-green-600'>{product.category.name}</span>
          <h3 className="text-lg font-normal text-gray-800 mb-4">{product.title.split(' ').slice(0,2).join(' ')}</h3>

          <div className="flex justify-between items-center">
            <span>{product.price} EGP</span>
            <span>{product.ratingsAverage} <i className='fas fa-star text-yellow-400'></i></span>
          </div>

            <button className="btn">add to card</button>
            </Link>
        </div>
      </div>)}
      
    </div>
    
  </>
}
