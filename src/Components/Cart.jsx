import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {data} from "../Data/data"

const Cart = () => {
    let {Id} =useParams()
  const filterredData =  data.filter((item)=>{
        return  (
            item.id === parseInt(Id) 
        )
    })
    console.log(filterredData)
  return (
    <div className='text-3xl text-red-600'>
        {
            filterredData.map((item,index)=>{
                return (
                    <div key={index} className=""> {item.name}</div>
                )
            })
        }
  </div>
  )
}

export default Cart