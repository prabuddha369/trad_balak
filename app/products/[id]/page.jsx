'use client';
import React, { useState } from 'react';
import Header from '@/components/shared/Header'
import Footer from '../../../components/shared/Footer'
import { GrFormNextLink } from "react-icons/gr";
import { GrFormPreviousLink } from "react-icons/gr";
import Carousel from 'react-material-ui-carousel'
import { FaRegCircle } from "react-icons/fa";
import { Dancing_Script } from 'next/font/google'
import { asthetic, vintage, couples, fullsleves } from '@/constants';
import Image from 'next/image';

const dancing_script = Dancing_Script({ subsets: ["latin"] });

export default function Page({ params }) {
    const productId = params.id;

    // Function to find a product by productId
    const findProductById = (productId) => {
        let product = asthetic.find(item => item.id === productId);
        if (!product) {
            product = vintage.find(item => item.id === productId);
        }
        if (!product) {
            product = couples.find(item => item.id === productId);
        }
        if (!product) {
            product = fullsleves.find(item => item.id === productId);
        }
        return product;
    };

    const product = findProductById(productId);

    //+ and - for Quantity
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    //size selection
    const [selectedSize, setSelectedSize] = useState(null);

    const handleSizeClick = (size) => {
        setSelectedSize(size);
    };

    const getDirectGoogleDriveUrl = (originalUrl) => {
        if (originalUrl.includes('drive.google.com/file/d/')) {
            const fileId = originalUrl.split('drive.google.com/file/d/')[1].split('/view')[0];
            const directUrl = `https://drive.google.com/uc?id=${fileId}`;
            return directUrl;
        }

        return originalUrl;
    };

    return (
        <section className='relative'>
            <div className='absolute top-[160px] w-fit h-[180px] transform -rotate-90 text-2xl text-white'>Road to summers</div>
            <Header />
            {product ? (
                <div>
                    <div className={`pt-[30%] md:pt-[10%]`} style={{ background: `url(/bg.png) no-repeat center`, backgroundSize: '', }}>
                        <div className='flex justify-end me-5'>
                            <div className='h-fit  font-bold flex flex-col'>
                                <p className='text-2xl pb-2 ms-20'>{product.name}</p>
                                <p className='bg-white text-white text-[6px] ms-14 me-32'>underline</p>
                            </div>
                        </div>
                        <Carousel
                            className='flex flex-col w-[100%] mt-5'
                            autoPlay={true}
                            interval={5000}
                            swipe={true}
                            navButtonsAlwaysVisible={true}
                            cycleNavigation={true}
                            navButtonsProps={{
                                style: {
                                    background: "#ffffff00",
                                }
                            }}
                            IndicatorIcon={<FaRegCircle size={14}/>}
                            indicatorIconButtonProps={{
                                style: {
                                    padding: '1px',  
                                    margin: '5px'  ,
                                    color: 'white'     
                                }
                            }}
                            activeIndicatorIconButtonProps={{
                                style: {
                                    backgroundColor: 'white',
                                    color:'grey'
                                }
                            }}
                            NextIcon={<GrFormNextLink size={30} className='text-[#ffffff]/0' />}
                            PrevIcon={<GrFormPreviousLink size={30} className='text-[#ffffff]/0' />}
                        >
                            {product.imgUrl.map((imgurl, index) => (
                                <div className='flex w-[100%] place-items-center justify-center text-center'>
                                    <Image key={index}
                                        src={getDirectGoogleDriveUrl(imgurl)} alt={product.name}
                                        width="0"
                                        height="0"
                                        sizes="100vw"
                                        className="w-[40vh] h-[60vh] md:w-1/4 md:h-[40%] mt-3 rounded-xl" />

                                    <div className='absolute right-0 mt-80 ps-14' style={{ background: `url(/solution_bg.png) no-repeat left`, }}>
                                            {product.solutions.map((solution, index) => (
                                                <p key={index}>{solution}</p>
                                            ))}
                                    </div>
                                </div>
                            ))}
                        </Carousel>

                        <div className='flex flex-row mx-5 mt-8 justify-between'>
                            <h1 className='text-5xl font-bold'>{product.price}</h1>
                        </div>
                        <div className='mx-5 mt-5'>
                            <input type='button' value="PRE ORDER" onClick={() => alert("Coming soon!")} className='bg-white text-black text-2xl py-4 font-bold w-full rounded-lg' />
                        </div>
                        <div className='mx-5 mt-3'>
                            <input type='button' value="ADD TO CART" onClick={() => alert("Coming soon!")} className='bg-[#ab2424] text-white text-2xl py-2 font-bold w-full rounded-lg' />
                        </div>
                        <div className='flex flex-row justify-between mx-5 mt-5 pb-10'>
                            <div className='flex flex-col w-[70%]'>
                                <p className='text-xl pb-2'>Size</p>
                                <div className='w-full flex flex-wrap text-white justify-start place-items-center gap-2'>
                                    {Object.keys(product.sizes).map((size, index) => (
                                        <div key={index}
                                            onClick={() => handleSizeClick(size)}
                                            className={`w-7 h-8 md:w-10 md:h-10 text-sm flex flex-wrap border-white justify-center ${selectedSize === size && !product.sizes[size] ? "bg-white text-black" : ""} font-semibold place-items-center border-[2px] ${product.sizes[size] ? "text-[#D3D3D3] line-through" : ""}`}>
                                            {size}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <p className='text-xl pb-2'>Quantity</p>
                                <div className="flex items-center bg-white text-black font-bold rounded-xl">
                                    <button onClick={decreaseQuantity} className="px-2 py-1 border border-gray-400 rounded-l">
                                        -
                                    </button>
                                    <span className="px-4 py-1 border border-gray-400">{quantity}</span>
                                    <button onClick={increaseQuantity} className="px-2 py-1 border border-gray-400 rounded-r">
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className='bg-[#5A5A5A]/50 rounded-t-xl flex flex-col'>
                            <div className='flex flex-row pt-5 ps-5'>
                                <div className='bg-gradient-to-r from-[#ff5c00]/40 via-[#ff3131]/40 to-[#760000]/70 flex flex-row w-[100%] pb-32 rounded-l-2xl p-3'>
                                    <div className='flex flex-col'>
                                        <p className={`${dancing_script.className} text-5xl text-white font-bold text-end`}>Product</p>
                                        <p className='text-xl text-white font-bold text-end'>Description</p>
                                    </div>
                                    <div className='text-white ms-16 pt-5'>
                                        <ul className='list-disc'>
                                            {product.desctiptions.map((description, index) => (
                                                <li key={index}>{description}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className='absolute left-0'>
                                    <Image src='/fabric.png' alt={product.name}
                                        width="0"
                                        height="0"
                                        sizes="100vw"
                                        className="mt-24 w-[24vh] h-[16vh] md:w-1/4 md:h-[40%]" />
                                    <Image src='/cotton.png' alt={product.name}
                                        width="0"
                                        height="0"
                                        sizes="100vw"
                                        className="absolute top-24 mt-14 left-32 w-[25vh] h-[15vh]" />
                                </div>
                            </div>

                            <div className='py-20 pb-32'>
                                <div className='relative bg-gradient-to-r from-[#760000]/70 via-[#ff3131]/40 to-[#ff5c00]/40 w-[90%] rounded-r-2xl flex flex-row'>
                                    <div className='text-white ps-10 pt-10 pb-16 w-[60%]'>
                                        <ul className='list-disc'>
                                            {product.instructions.map((description, index) => (
                                                <li key={index}>{description}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className='pt-2 w-[40%] pe-2'>
                                        <p className={`${dancing_script.className} text-5xl text-white font-bold text-end`}>Product</p>
                                        <p className='text-xl text-white font-bold text-center'>Care</p>
                                    </div>
                                    <Image src='/stained.png' alt={product.name}
                                        width="0"
                                        height="0"
                                        sizes="100vw"
                                        className="absolute top-24 -right-10 w-[24vh] h-[18vh]" />
                                    <Image src='/washing.png' alt={product.name}
                                        width="0"
                                        height="0"
                                        sizes="100vw"
                                        className="absolute top-24 mt-24 me-20 -right-10 w-[24vh] h-[18vh]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <h1>Product not found</h1>
            )}
            <Footer />
        </section>
    );
}
