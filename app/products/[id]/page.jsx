'use client';
import React, { useState } from 'react';
import Header from '@/components/shared/Header'
import Footer from '../../../components/shared/Footer'
import { GrFormNextLink } from "react-icons/gr";
import { Separator } from "@/components/ui/separator";
import { GrFormPreviousLink } from "react-icons/gr";
import { Dancing_Script } from 'next/font/google'
import Carousel from 'react-material-ui-carousel'
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
            {/* <div className='absolute top-[180px] w-fit h-[160px] transform -rotate-90 text-xl text-white'>READ TO SUMMERS</div> */}
            <Header />
            {product ? (
                <div>
                    <div className="pt-[30%] px-[7%] md:pt-[10%] bg-white text-black">
                        <Carousel
                            className='flex flex-col w-[100%]'
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
                            NextIcon={<GrFormNextLink size={30} className='text-black' />}
                            PrevIcon={<GrFormPreviousLink size={30} className='text-black' />}
                        >
                            {product.imgUrl.map((imgurl, index) => (
                                <div className='flex w-[100%] place-items-center justify-center text-center'>
                                    <Image key={index}
                                        src={getDirectGoogleDriveUrl(imgurl)} alt={product.name}
                                        width="0"
                                        height="0"
                                        sizes="100vw"
                                        className="w-[40vh] h-[60vh] md:w-1/4 md:h-[40%] mt-3 rounded-xl" />
                                </div>
                            ))}
                        </Carousel>
                        <div className='h-fit  font-medium flex flex-col'>
                            <h5 className='text-xs py-5'>TRADBALAK CLOTHING</h5>
                            <h1 className='text-3xl'>{product.name}</h1>
                            <div className='flex flex-row font-light mt-5 gap-2 place-items-end'><p className='text-xl'>{product.price}</p> <p className='text-base font-medium text-[#8a8a8a]'>M.R.P</p> {product.sizes[selectedSize] ? <p className='bg-[#584ea6] px-2 text-white font-bold'>Sold Out</p> : <p></p>} </div>
                            <p className='text-sm font-light'>&#40;incl. of all <b>taxes</b>&#41;</p>
                        </div>
                        <Separator className="border border-gray-200 my-5" />
                        <div className='flex flex-col'>
                            <p className='text-lg font-medium pb-2'>Size: {selectedSize}</p>
                            <div className='w-full flex flex-wrap text-black justify-start place-items-center gap-2'>
                                {Object.keys(product.sizes).map((size, index) => (
                                    <div key={index}
                                        onClick={() => handleSizeClick(size)}
                                        className={`w-12 h-12 md:w-10 md:h-10 rounded-[5px] text-base flex flex-wrap border-grey-800 justify-center ${selectedSize === size ? " border-[#363636] border-[2px]" : ""}  ${selectedSize === size && !product.sizes[size] ? "bg-gray-200 border-[#363636] border-[2px]" : ""} font-light place-items-center border-[1px] ${product.sizes[size] ? "text-[#D3D3D3] line-through" : ""}`}>
                                        {size}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='flex flex-col my-5'>
                            <p className='text-lg pb-2'>Quantity:</p>
                            <div className="w-fit rounded-[5px] py-2 flex items-center bg-white text-black font-bold border border-gray-200 border-[3px]">
                                <button onClick={decreaseQuantity} className="px-4 font-bold text-xl">
                                    -
                                </button>
                                <span className="px-6 font-light">{quantity}</span>
                                <button onClick={increaseQuantity} className="px-4 font-bold text-xl">
                                    +
                                </button>
                            </div>
                        </div>
                        <div className='mx-5 mt-3 bg-[#dbdbdb] text-black rounded-[5px]'>
                            <input
                                type='button'
                                value={product.sizes[selectedSize] ? "SOLD OUT" : "ADD TO CART"}
                                onClick={() => alert("Coming soon!")}
                                className={`text-sm py-3 w-full ${product.sizes[selectedSize] ? "font-medium" : "font-bold"}`}
                            />
                        </div>

                        <div className={`mx-5 mt-3 text-white ${product.sizes[selectedSize] ? "bg-[#636363]" : "bg-black"}`}>
                            <input type='button' value="BUY NOW" onClick={() => alert("Comming soon!")} className='text-sm py-3 font-bold w-full' />
                        </div>
                        <Separator className="border border-gray-200 mt-8" />
                    </div>
                    <div className='bg-white flex flex-row pt-5 px-7'>
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
