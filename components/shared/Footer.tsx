import React from 'react'
import localFont from 'next/font/local';
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const agrandir = localFont({
    src: [
        {
            path: '../../public/font/Agrandir Grand Light 300.otf',
            weight: '800',
        },
    ]
});

const agrandir_Heavy = localFont({
    src: [
        {
            path: '../../public/font/Agrandir Grand Heavy 800.otf',
            weight: '800',
        },
    ]
});

const Footer = () => {
    return (
        <footer className={`bg-[#bfbbb3]/90 text-black ${agrandir.className}`}>
            <section className='flex flex-row text-[#9b2e15] justify-center place-items-center me-10 py-3'>
                <div className='flex flex-col text-end text-sm pe-2 border-r-2 border-[#d3d3d3]'>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Delivery & Return Policy</p>
                    <p>Customer Query</p>
                </div>
                <div className='flex flex-col justify-start place-items-start ps-2'>
                    <div className='flex flex-row justify-center place-items-center gap-2'><p>INSTAGRAM</p><FaInstagram/></div>
                    <div className='flex flex-row justify-center place-items-center gap-2'><p>TWITTER</p><FaTwitter/></div>
                    <div className='flex flex-row justify-center place-items-center gap-2'><p>FACEBOOK</p><FaFacebookF/></div>
                </div>
            </section>
            <div className='bg-[#491509] text-sm p-3 text-white flex flex-col justify-center place-items-center'>
                <p className={`${agrandir_Heavy.className}`}>Contact us</p>
                <p>+91 1234567890  |  info@tradbalak.com</p>
            </div>
        </footer>
    )
}

export default Footer