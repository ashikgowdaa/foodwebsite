import React, { useEffect, useState } from 'react'
import {data} from'../Data/data';
import {categories} from '../Data/data'
import { IoHeartCircleSharp } from "react-icons/io5";
const Home = () => {
  const [foodData,setFoodData]=useState(data)


  const filterByCat = (catValue) => {
   setFoodData(
    data.filter((item)=>{
      return(
        item.category===catValue
      )
    })
   )
  };

  const filterByPrice=(priceValue)=>{
    setFoodData(
      data.filter((item)=>{
        return(
          item.price === priceValue
        )
      })
    )
  }

 
  return (
    < >
      <div className="flex justify-center mt-2 p-2">
        <div className=" relative flex justify-center w-full max-w-[1500px] h-[60vh] ">
          <img
            src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className=" object-cover w-full"
            alt=""
          />
          <div className="absolute top-1/2 left-[5%] text-white text-5xl font-bold lg:7xl z-10">
            <h1>
              The <span className="text-[#fca04a]">Best</span>{" "}
            </h1>
            <h1>
              <span className="text-[#fca04a]">Foods</span> Delivered
            </h1>
          </div>
          <div className="absolute bg-[#0000005a] w-full h-full"></div>
        </div>
      </div>

      {/* Card Section */}
      <div className="flex justify-center mt-2">
        <div className="w-full max-w-[1500px] grid md:grid-cols-3 gap-5 items-center p-2 sm:p-1">
          {/* card1 */}
          <div className="relative w-full rounded-xl ">
            <img
              src="https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="rounded-xl object-cover w-full h-full"
              alt=""
            />
            <div className="absolute w-[100%] top-[28%] lg:top-[46%] left-3 text-white z-10  flex flex-col gap-2">
              <p className="font-bold text-[1.2rem] xl:text-4xl ">
                Suns Out BOGGO's Out
              </p>
              <p className="text-1xl ">Through 9/20</p>
              <button className="bg-white text-black rounded-lg py-2 font-bold w-1/2 lg:w-1/2  ">
                Order Now
              </button>
            </div>
            <div className="absolute bg-[#0000009a] w-full h-full top-0 rounded-xl"></div>
          </div>
          {/* card2 */}
          <div className="relative rounded-xl ">
            <img
              src="https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="rounded-xl object-cover w-full h-full"
              alt=""
            />
            <div className="absolute w-full top-[28%] lg:top-[46%] left-3 text-white z-10  flex flex-col gap-2">
              <p className="font-bold text-[1.2rem] xl:text-4xl ">
                Suns Out BOGGO's Out
              </p>
              <p className="text-1xl ">Through 9/20</p>
              <button className="bg-white text-black rounded-lg py-2 font-bold w-1/2 lg:w-1/2  ">
                Order Now
              </button>
            </div>
            <div className="absolute bg-[#0000009a] w-full h-full top-0 rounded-xl"></div>
          </div>
          {/* card3 */}
          <div className="relative rounded-xl ">
            <img
              src="https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="rounded-xl object-cover w-full h-full"
              alt=""
            />
            <div className="absolute w-full top-[28%] lg:top-[46%] left-3 text-white z-10  flex flex-col gap-2">
              <p className="font-bold text-[1.2rem] xl:text-4xl ">
                Suns Out BOGGO's Out
              </p>
              <p className="text-1xl ">Through 9/20</p>
              <button className="bg-white text-black rounded-lg py-2 font-bold w-1/2 lg:w-1/2  ">
                Order Now
              </button>
            </div>
            <div className="absolute bg-[#0000009a] w-full h-full top-0 rounded-xl"></div>
          </div>
        </div>
      </div>

      {/* Food Section */}
      <div className="flex justify-center mt-2 p-2">
        <div className="w-full max-w-[1500px]">
          {/* Filter section */}
          <div className="flex flex-col gap-3">
            <h1 className="text-center text-[#fc854a] text-5xl font-bold font-lobster">
              Top Rated Menu Items
            </h1>
            <p className="font-bold">Filter Type</p>
            <div className=" flex gap-5 flex-wrap md:flex-nowrap">
              <button onClick={()=>setFoodData(data)} className="border text-black w-20 rounded-md focus:bg-[#fc854a] focus:text-white font-bold">
                All
              </button>

              <button onClick={()=> filterByCat('burger')} className="border text-black w-20 rounded-md focus:bg-[#fc854a] focus:text-white font-bold">
                Burgers
              </button>
              <button onClick={()=> filterByCat('pizza')} className="border text-black w-20 rounded-md focus:bg-[#fc854a] focus:text-white font-bold">
                Pizza
              </button>
              <button onClick={()=> filterByCat('salad')} className="border text-black w-20 rounded-md focus:bg-[#fc854a] focus:text-white font-bold">
                Salads
              </button>
              <button onClick={()=> filterByCat('chicken')} className="border text-black w-20 rounded-md focus:bg-[#fc854a] focus:text-white font-bold">
                Chicken
              </button>
            </div>
            <p className="font-bold">Filter Price</p>
            <div className="flex gap-2">
              <button onClick={()=>filterByPrice('$')} className="border text-black w-20 rounded-md focus:bg-[#fc854a] focus:text-white font-bold">
                $
              </button>
              <button onClick={()=>filterByPrice('$$')} className="border text-black w-20 rounded-md focus:bg-[#fc854a] focus:text-white font-bold">
                $$
              </button>
              <button onClick={()=>filterByPrice('$$$$')} className="border text-black w-20 rounded-md focus:bg-[#fc854a] focus:text-white font-bold">
                $$$
              </button>
              <button onClick={()=>filterByPrice('$$$$')} className="border text-black w-20 rounded-md focus:bg-[#fc854a] focus:text-white font-bold">
                $$$$
              </button>
            </div>
          </div>
          {/* food card section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
{
  foodData.map((item,index)=>{
    return(

    <div key={index} className="rounded-sm flex flex-col gap-3 items-center p-3 shadow-orange-300 shadow-lg relative ">
    <div className="absolute top-[46%] right-[2%]">
      <IoHeartCircleSharp size={40} className='cursor-pointer'/>
    </div>
    <img
      src={item.image} className='rounded-xl object-cover  min-w-[300px] max-h-[200px]' alt=""
    />
    <div className="">
      <h1 className='text-2xl font-bold'>{item.name}</h1>
      <p className='font-bold'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Blanditiis, quisquam?
      </p>
      <div className="mt-3">
        <span className='text-[#fca04a] font-bold'>Can be added</span>
        <span className='flex gap-1 flex-wrap mt-2'>
          <button className='text-black text-black border w-max px-3 rounded-md font-bold focus:bg-red-700 focus:text-white rounded-md font-bold focus:bg-red-700 focus:text-white' >Extra Sauce</button>
          <button className='text-black border w-max px-3 rounded-md font-bold focus:bg-red-700 focus:text-white ' > Drink</button>
          <button className='text-black border w-max px-3 rounded-md font-bold focus:bg-red-700 focus:text-white ' >Extra Hotness</button>
          <button className='text-black border w-max px-3 rounded-md font-bold focus:bg-red-700 focus:text-white ' >double hotified</button>
        </span>
      </div>
      <div className="flex justify-around mt-4">
        <h1 className='text-3xl font-bold'>{item.price}</h1>
        <button className='border-none p-2 rounded-lg bg-red-700 text-white font-bold hover:bg-green-600'> Order Now</button>
      </div>
    </div>
  </div>
    )
  })
}

          
         
          </div>
        </div>
      </div>
      {/* Menu Section */}
  <div className="text-5xl text-center text-[#fca04a] font-bold font-lobster ">Menu List</div>
      <div className="flex justify-center mt-2 p-2">
<div className="w-full max-w-[1500px] flex gap-2 flex-wrap justify-center ">
  {
    categories.map((item,index)=>{
      return(
        <div key={index} className="bg-[#4444453b] w-[150px] flex justify-center flex-col items-center rounded-lg px-1">
        <img src={item.image} className='object-contain w-1/2' alt="" />
        <h1 className='text-white font-bold text-[0.8rem] text-red-700 '>{item.name}</h1>
      </div>
      )
    })
  }

</div>
      </div>
    </>
  );
}

export default Home