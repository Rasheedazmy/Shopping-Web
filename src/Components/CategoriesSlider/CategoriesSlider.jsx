import React, { useEffect, useState } from 'react';
import Style from './CategoriesSlider.module.css';
import Slider from "react-slick";
import axios from 'axios';


export default function CategoriesSlider() {

  var settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 8,
    slidesToScroll: 3,
    autoplay:true,

    responsive: [
      {
        breakpoint: 1200, // شاشات لابتوب صغيرة
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 992, // تابلت landscape
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768, // تابلت أو موبايل كبير
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 576, // موبايل عادي
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 400, // موبايل صغير
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const [categories, setCategories] = useState([])


  function getCategories()
  {
    axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
    .then(({data}) => {
      
      setCategories(data.data);
      
    })
    .catch((error) =>{

    })
  }
  

    const [counter, setcounter] = useState(0)
    useEffect(()=>{
      getCategories();
    } , [])
  return <>
  <div className='py-4'>
    <h2 className='py-4 text-gray-800 font-light'>Shop Popular Category</h2>
    <Slider {...settings}>
          {categories?.map((category) => <div>
            <img className='category-img w-full' src={category.image} alt={category.name}/>
            <h4 className='font-light'>{category.name}</h4>
          </div>)}
        </Slider>
        </div>      
  </>
}
