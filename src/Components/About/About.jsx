import React, { useEffect } from 'react'
import logo from "../../../public/vite.svg"


export default function About() {
    useEffect(()=>{
        let x = setInterval(()=>{console.log('hello');} , 1000)
        
        return()=>{
          clearInterval(x);
          console.log('unMount');
          
          
        }
      },[]);
  return <>
    <h1>About hereeeeee</h1>
    <div>About</div>
    <img src={logo} alt="" />
    </>
}
