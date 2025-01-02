import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import cartContext from '../Context/CartContext';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import wishListConstext from '../Context/WishListContext';

const Home = () => {
    let wishListCtx = useContext(wishListConstext)
    let navigate = useNavigate()
    const [element, setelement] = useState([]);
    const [loading, setloading] = useState(false);
    const [currentPage, setcurrentPage] = useState(1);
    const [productPerPage, setproductPerPage] = useState(20);

    const lastProductIndex = currentPage * productPerPage;
    const firstProductIndex = lastProductIndex - productPerPage
    const currentProduct = element.slice(firstProductIndex, lastProductIndex)

    let pagination = new Array(Math.ceil(element.length / productPerPage)).fill(0)

    const handelProductPage = (index) => {
        setcurrentPage(index + 1)
        getAllData()
    }
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
            console.log('error')
            setloading(true)
        }

    }

    useEffect(() => {
        getAllData()
    }, [])

    const HandelSubmit = (ele) => {
        navigate('/view', { state: ele })
    }
    const handlePrevious = () => {
        if (currentPage > 1) {
            setcurrentPage(currentPage - 1)
            getAllData()

        }
    };

    const handleNext = () => {
        if (currentPage < pagination.length) {
            setcurrentPage(currentPage + 1)
            getAllData()
        }
    };

    const handleJumpToPage = (e) => {
        let pageNumber = e.target.value;
        // console.log(typeof pageNumber);
        if (PageNumber => 1) {
            setcurrentPage(+pageNumber)
            getAllData()
        }
        else {
            getAllData()
        }
    };

    const handleSearch = (e) => {
        console.log(`Search query: ${e.target.value}`);
    };



    return (
        <>
            {loading ?
                (<SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <div className="font-[sans-serif] py-4 mx-auto lg:max-w-7xl sm:max-w-full">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {[...Array(8)].map((_, i) => (
                                <div key={i}>
                                    <div className="bg-gray-50 shadow-md overflow-hidden rounded-lg cursor-pointer hover:-translate-y-2 transition-all relative">
                                        <div className="bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full absolute top-3 right-3"></div>
                                        <div className="w-5/6 h-[260px] p-4 overflow-hidden mx-auto aspect-w-16 aspect-h-8 flex items-center justify-center bg-gray-200 animate-pulse">
                                            <div className="flex items-center gap-2">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-6 h-6 text-gray-500 animate-spin"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <circle
                                                        cx="12"
                                                        cy="12"
                                                        r="10"
                                                        strokeWidth="4"
                                                        className="opacity-25"
                                                    />
                                                    <path
                                                        d="M4 12a8 8 0 018-8v4a4 4 0 100 8v4a8 8 0 01-8-8z"
                                                        strokeWidth="4"
                                                    />
                                                </svg>
                                                <span className="text-gray-500 font-medium">Loading...</span>
                                            </div>
                                        </div>

                                        <div className="p-6 bg-white">

                                            <div className="h-5 bg-gray-200 rounded w-3/4 mb-4 animate-pulse"></div>

                                            <div className="flex items-center gap-4">
                                                <div className="h-4 bg-gray-200 rounded w-1/4 animate-pulse"></div>
                                                <div className="h-4 bg-gray-200 rounded w-1/3 animate-pulse"></div>
                                                <div className="h-4 bg-gray-200 rounded w-1/4 animate-pulse"></div>
                                            </div>


                                            <div className="h-4 bg-gray-200 rounded w-1/2 mt-4 animate-pulse"></div>


                                            <div className="flex space-x-2 mt-4">
                                                <div className="h-8 w-8 bg-gray-200 rounded-full animate-pulse"></div>
                                                <div className="h-8 w-8 bg-gray-200 rounded-full animate-pulse"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </SkeletonTheme>)
                :
                (<>
                    <div className="flex items-center justify-between flex-wrap bg-gray-100 p-4 rounded-lg shadow-md">
                        {/* Jump to Page */}
                        <div className="flex items-center gap-2">
                            <label htmlFor="jump" className="text-gray-700 font-medium">
                                Jump to:
                            </label>
                            <input
                                id="jump"
                                type="number"
                                placeholder="Page No."
                                value={currentPage}
                                onChange={handleJumpToPage}
                                className="w-20 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                            />
                        </div>

                        {/* Previous and Next Buttons */}
                        <div className="flex items-center gap-4">
                            <button
                                onClick={handlePrevious}
                                className="px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition"
                            >
                                Previous
                            </button>
                            <p className='font-italic'><i>{currentPage} of {pagination.length}</i></p>
                            <button
                                onClick={handleNext}
                                className="px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition"
                            >
                                Next
                            </button>
                        </div>

                        {/* Search Box */}
                        <div className="flex items-center gap-2">
                            <input
                                type="text"
                                placeholder="Search..."
                                onChange={handleSearch}
                                className="w-64 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                            />
                            <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="w-5 h-5 text-gray-700"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M10 19l-7-7m0 0l7-7m-7 7h16"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="font-[sans-serif] py-4 mx-auto lg:max-w-7xl sm:max-w-full">
                        <div className="grid mx-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {currentProduct.map((element, i) => {
                                let str = ''
                                for (let index = 0; index < Math.ceil(element.rating); index++) {
                                    str += "⭐"
                                }
                                return <div key={i}>
                                    <div state={element} >
                                        <div className="bg-gray-50 shadow-md overflow-hidden rounded-lg cursor-pointer hover:-translate-y-2 transition-all relative" >


                                            <div id='wishlist' onClick={() => wishListCtx.HandelWishlist(element)} className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-3 right-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-gray-800 inline-block" viewBox="0 0 64 64">
                                                    <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" data-original="#000000" />
                                                </svg>
                                            </div>

                                            <div onClick={() => HandelSubmit(element)} className="w-5/6 h-[260px] p-4 overflow-hidden mx-auto aspect-w-16 aspect-h-8">
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
                </>)
            }
            <div className="flex flex-wrap justify-center">


                <button className="flex items-center justify-center px-4 py-2 mx-1 my-2 text-gray-700 transition-colors duration-300 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                </button>
                {pagination.map((ele, i) => {
                    return <a href='#main' onClick={() => handelProductPage(i)} className=" px-4 py-2 mx-1 my-2 text-gray-700 transition-colors duration-300 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
                        {i + 1}
                    </a>
                })}

                <button className="flex items-center justify-center px-4 py-2 mx-1 my-2 text-gray-700 transition-colors duration-300 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>

        </>
    );
}

export default Home;
