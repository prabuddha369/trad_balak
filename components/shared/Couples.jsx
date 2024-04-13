import React from 'react';
import { couples } from '@/constants';
import Link from 'next/link'
import Image from 'next/image';

const Couples = () => {
    const getDirectGoogleDriveUrl = (originalUrl) => {
        if (originalUrl.includes('drive.google.com/file/d/')) {
            const fileId = originalUrl.split('drive.google.com/file/d/')[1].split('/view')[0];
            const directUrl = `https://drive.google.com/uc?id=${fileId}`;
            return directUrl;
        }

        return originalUrl;
    };
    return (
        <section id='couples' className='h-full text-black pt-[10%] flex flex-col justify-center items-center'>
            <h1 className='text-3xl text-[#404040] pb-6'>COUPLE WEARS</h1>
            <div className='w-[96%] h-full flex flex-row md:flex-wrap justify-between overflow-x-auto'>
                {couples.map((item, index) => (
                    <div key={index} className="flex flex-col w-[250px] md:w-[16%] p-2">
                        <Link href={`../products/${item.id}`}>
                            <div className="flex flex-col place-items-center justify-center  md:w-full">
                                <Image src={getDirectGoogleDriveUrl(item.imgUrl[0])} alt={item.name}
                                    width="0"
                                    height="0"
                                    sizes="100vw"
                                    className="w-[28vh] h-[42vh] md:h-[42vh]" />
                            </div>
                            <h4 className='pt-4 pb-2 text-center'>{item.name}</h4>
                            <p className='text-black text-center'>{item.price}</p>
                            <div className='w-full flex flex-wrap justify-center gap-2'>
                                {Object.keys(item.sizes).map((size, index1) => (
                                    <div key={index1} className={`w-6 h-6 md:w-10 md:h-10 text-[10px] md:text-base flex justify-center items-center border-[#949494] font-semibold border-[1px] ${item.sizes[size] ? "text-[#757575] line-through" : "bg-white"}`}>
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

export default Couples;
