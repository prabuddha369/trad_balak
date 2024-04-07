import React from 'react';
import { tradbalakspecial } from '@/constants';
import Link from 'next/link'
import Image from 'next/image';

const TradBalakSpecial = () => {
    return (
        <section id='Tradbalakspecial' className='w-full h-full text-black pt-[30%] md:pt-[10%] flex flex-col justify-center place-items-center'>
            <h1 className='text-3xl text-[#404040] pb-6'>TRAD BALAK SPECIAL</h1>
            <div className='w-[96%] h-full flex flex-wrap justify-between'>
                {tradbalakspecial.map((item, index) => (
                    <div key={index} className="flex flex-col w-[50%] md:w-[16%] p-2">
                        <Link href={`../products/${item.id}`}>
                            <Image src={item.imgUrl} alt={item.name}
                                width="0"
                                height="0"
                                sizes="100vw"
                                className="w-full h-[30vh] md:h-[42vh]" />
                            <h4 className='pt-4 pb-2 text-center'>{item.name}</h4>
                            <p className='text-black text-center'>{item.price}</p>
                            <div className='w-full flex flex-wrap justify-center place-items-center gap-2'>
                                {Object.keys(item.sizes).map((size, index1) => (
                                    <div key={index1} className={`w-6 h-6 md:w-10 md:h-10 text-[10px] md:text-base flex flex-wrap border-[#949494] justify-center font-semibold place-items-center border-[1px] ${item.sizes[size] ? "text-[#757575] line-through" : "bg-white"}`}>
                                        {size}
                                    </div>
                                ))}
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TradBalakSpecial;
