import React from 'react'

export default function Child(props) {
  let {id , name ,price} = props.pDetails;
  return <>
    
    <div className='w-1/4 p-4'>
      <div className="p-6 relative shadow-xl rounded-xl bg-gray-200">
        <h4>id: {id}</h4>
        <h4>name: {name}</h4>
        <h4>price: {price}</h4>
        <button onClick={()=> props.update() } className='btn-outline text-yellow-600 border-yellow-600 bg-white'>Update</button>
      </div>
    </div>
    </>
}
