import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import cartContext from '../Context/CartContext';
// import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Home = () => {
    let navigate = useNavigate()
    const [element, setelement] = useState([]);
    const [loading, setloading] = useState(false);


    const getAllData = async () => {
        try {
            setloading(true)
            let data = await fetch('https://dummyjson.com/products?limit=0&skip=0')
                .then(res => res.json())
                .catch(erorr => console.erorr(erorr));

            setelement(data.products)
            setloading(false)
        }
        catch (error) {
            console.log(error.message)
            setloading(true)
        }

    }

    useEffect(() => {
        getAllData()
    }, [])

    const HandelSubmit = (ele) => {
navigate('/view', {state:ele})
    }
    const HandelWishlist=()=>{
    }

    return (
        <>
                    <div className="font-[sans-serif] py-4 mx-auto lg:max-w-7xl sm:max-w-full">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {element.map((element, i) => {
                                let str = ''
                                for (let index = 0; index < Math.ceil(element.rating); index++) {
                                    str += "⭐"
                                }
                                return <div key={i}>
                                    <div state={element} >
                                        <div className="bg-gray-50 shadow-md overflow-hidden rounded-lg cursor-pointer hover:-translate-y-2 transition-all relative" >

                                            <div onClick={HandelWishlist} className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-3 right-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-gray-800 inline-block" viewBox="0 0 64 64">
                                                    <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" data-original="#000000" />
                                                </svg>
                                            </div>
                                            <div onClick={()=>HandelSubmit(element)} className="w-5/6 h-[260px] p-4 overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                                                <img src={element.thumbnail} alt="element 1" className="h-full w-full object-contain" />
                                            </div>
                                            <div className="p-6 bg-white">
                                                <h3 className="text-lg font-bold text-gray-800">{element.title}</h3>
                                                <div className='flex items-center gap-4'>

                                                    <h4 className="text-lg font-bold mt-2 text-green-700 max-sm:text-3xl ">₹{Math.ceil(element.discountPercentage)}% off</h4>
                                                    <h4 className="text-lg mt-2 text-gray-400 max-sm:text-3xl font-bold line-through line-through-length-20rem">₹{Math.ceil((Math.ceil(element.price * 10) * 100) / (100 - Math.ceil(element.discountPercentage)))}</h4>
                                                    <h4 className="text-lg text-gray-800 font-bold mt-2 max-sm:text-3xl">₹{Math.round(element.price * 10)}</h4>
                                                </div>
                                                <p className="text-gray-600 text-sm mt-2">{element.warrantyInformation}</p>
                                                <div className="flex space-x-2 mt-4"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })}



                        </div>
                    </div>
    
            </>
            );
}

            export default Home;
