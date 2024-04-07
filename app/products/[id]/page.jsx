'use client';
import React, { useState } from 'react';
import Header from '@/components/shared/Header'
import Footer from '../../../components/shared/Footer'
import { Dancing_Script } from 'next/font/google'
import { tradbalakspecial, solidcolor, printedshirts, fullsleves } from '@/constants';
import Image from 'next/image';

const dancing_script = Dancing_Script({ subsets: ["latin"] });

export default function Page({ params }) {
    const productId = params.id;

    // Function to find a product by productId
    const findProductById = (productId) => {
        let product = tradbalakspecial.find(item => item.id === productId);
        if (!product) {
            product = solidcolor.find(item => item.id === productId);
        }
        if (!product) {
            product = printedshirts.find(item => item.id === productId);
        }
        if (!product) {
            product = fullsleves.find(item => item.id === productId);
        }
        return product;
    };

    const product = findProductById(productId);

    //+ and - for Qauntity
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

    return (
        <section className='relative'>
            <div className='absolute top-[180px] w-fit h-[160px] transform -rotate-90 text-xl text-white'>READ TO SUMMERS</div>
            <Header />
            {product ? (
                <div>
                    <div className={`pt-[30%] md:pt-[10%]`} style={{ background: `url(${product.materialimgUrl}) no-repeat center center fixed`, backgroundSize: 'cover', }}>
                        <div className='flex justify-end me-10'>
                            <div className='h-fit  font-bold flex flex-col'>
                                <p className='text-2xl pb-2 ms-10'>{product.name}</p>
                                <p className='bg-white text-white text-[6px] me-10'>underline</p>
                            </div>
                        </div>

                        <Image src={product.imgUrl} alt={product.name}
                            width="0"
                            height="0"
                            sizes="100vw"
                            className="w-[70%] h-[55vh] md:w-1/4 md:h-[40%] mx-[15%] mt-5" />
                        <h1></h1>
                        <div className='flex flex-row mx-5 mt-8 justify-between'>
                            <h1 className='text-4xl font-bold'>{product.price}</h1>
                            <ul className='list-disc'>
                                {product.solutions.map((solution, index) => (
                                    <li key={index}>{solution}</li>
                                ))}
                            </ul>
                        </div>
                        <div className='mx-5 mt-5'>
                            <input type='button' value="BUY NOW" onClick={() => alert("Comming soon!")} className='bg-white text-black text-2xl py-2 font-bold w-full rounded-lg' />
                        </div>
                        <div className='mx-5 mt-3'>
                            <input type='button' value="ADD TO CART" onClick={() => alert("Comming soon!")} className='border-white border-2 text-white text-2xl py-2 font-bold w-full rounded-lg' />
                        </div>
                        <div className='flex flex-row justify-between mx-5 mt-5 pb-10'>
                            <div className='flex flex-col w-1/2'>
                                <p className='text-xl pb-2'>Size</p>
                                <div className='w-full flex flex-wrap text-white justify-center place-items-center gap-2'>
                                    {Object.keys(product.sizes).map((size, index) => (
                                        <div key={index}
                                            onClick={() => handleSizeClick(size)}
                                            className={`w-8 h-10 md:w-10 md:h-10 text-base flex flex-wrap border-white justify-center ${selectedSize === size && !product.sizes[size]? "bg-gray-400" : ""} font-semibold place-items-center border-[1px] ${product.sizes[size] ? "text-[#D3D3D3] line-through" : ""}`}>
                                            {size}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <p className='text-xl pb-2'>Quantity</p>
                                <div className="flex items-center bg-white text-black font-bold">
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
                    </div>
                    <div className='bg-white flex flex-row pt-5'>
                        <div className='flex flex-col w-[45%]'>
                            <p className={`${dancing_script.className} text-5xl text-black font-bold text-end`}>Product</p>
                            <p className='text-xl text-black font-bold text-end'>Desctiption</p>
                            <div className='relative'>
                                <Image src={product.productdesc1imgUrl} alt={product.name}
                                    width="0"
                                    height="0"
                                    sizes="100vw"
                                    className="w-full h-[18vh] md:w-1/4 md:h-[40%]" />
                                <Image src={product.productdesc2imgUrl} alt={product.name}
                                    width="0"
                                    height="0"
                                    sizes="100vw"
                                    className="absolute top-24 left-32 w-[25vh] h-[15vh]" />
                            </div>
                        </div>
                        <div className='text-black ms-10 pt-12'>
                            <ul className='list-disc'>
                                {product.desctiptions.map((description, index) => (
                                    <li key={index}>{description}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className='bg-[#D3D3D3] py-32'>
                        <div className='relative bg-white w-[90%] flex flex-row'>
                            <div className='text-black ps-10 pt-10 pb-10 w-[60%]'>
                                <ul className='list-disc'>
                                    {product.instructions.map((description, index) => (
                                        <li key={index}>{description}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className='pt-2 w-[40%] pe-2'>
                                <p className={`${dancing_script.className} text-5xl text-black font-bold text-end`}>Product</p>
                                <p className='text-xl text-black font-bold text-center'>Care</p>
                            </div>
                            <Image src={product.productcareimgUrl} alt={product.name}
                                width="0"
                                height="0"
                                sizes="100vw"
                                className="absolute top-24 -right-10 w-[30vh] h-[25vh]" />
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
