import React from 'react'
import { Dancing_Script } from 'next/font/google'
import { EB_Garamond } from 'next/font/google'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const dancing_script = Dancing_Script({ subsets: ["latin"] });
const eb_garamond = EB_Garamond({ subsets: ["latin"] });

const Footer = () => {
    return (
        <footer className='bg-[#f2f2f2] text-black mt-[10%] p-10'>
            <section className='w-full flex flex-row justify-between gap-6'>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-xl'>ABOUT US</h1>
                    <span className='flex flex-row text-xl '>
                        <p className={`${eb_garamond.className} pe-2`}>TRAD</p>
                        <p className={`text-[#bfa163] ${dancing_script.className}`}>Balak</p>
                    </span>
                    <span>
                        <p>Taditional Balak Tag line.</p>
                        <a href='#' className='text-black underline'>Learn More</a>
                    </span>
                </div>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-xl'>FOLLOW US</h1>
                    <p>Stay in touch!</p>
                    <span className='flex flex-row gap-2'>
                        <FaInstagram size={30}  />
                        <FaFacebookF size={30}  />
                        <FaTwitter size={30}  />
                        <FaYoutube size={30}  />
                    </span>
                </div>
            </section>
            <p className='mt-20'><b>© TradBalak 2024. </b>All rights Reserved.</p>
        </footer>
    )
}

export default Footer