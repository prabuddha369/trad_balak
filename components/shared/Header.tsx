'use client';
import React, { useEffect, useState } from "react";
import localFont from 'next/font/local';
import { IoBag } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import { Bodoni_Moda } from "next/font/google";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import NavItems from "./NavItems";


const bodoni = Bodoni_Moda({ subsets: ["latin"] });
const andasia = localFont({
    src: [
        {
            path: '../../public/font/Andasia.ttf',
            weight: '800',
        },
    ]
});
const agrandir = localFont({
    src: [
        {
            path: '../../public/font/Agrandir Grand Light 300.otf',
            weight: '800',
        },
    ]
});

const Header = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <header className='fixed z-10 top-0 w-full h-fit pb-2 flex flex-row justify-between place-items-center bg-[#ab2424] text-white'>
            <div className="ms-5">
                <div className='flex flex-row gap-2 justify-center place-items-center'>
                    <p className={`${bodoni.className} text-[3rem] md:text-6xl`}>TRAD</p>
                    <p className={`text-white text-[1.8rem] ${andasia.className}`}>Balak</p>
                </div>
                <p className={`text-[0.8rem] ${agrandir.className}`}>Elegance Redefined Here</p>
            </div>

            <div className="flex flex-row gap-5">
                <nav>
                    <Sheet open={isOpen} onOpenChange={setOpen}>
                        <SheetTrigger className="align-middle">
                            <AiOutlineMenu size={40} />
                        </SheetTrigger>
                        <SheetContent
                            className="flex flex-col bg-white w-[1/3] text-black"
                            side={"left"}
                        >
                            <div className="flex gap-5 place-items-center">

                                <span className="text-2xl flex flex-row place-items-center">
                                    <p className={`${bodoni.className} text-3xl pe-2`}>TRAD</p>
                                    <p className={`text-[#bfa163] ${andasia.className}`}>Balak</p>
                                </span>
                            </div>
                            <Separator className="border border-gray-50/80" />
                            <NavItems setOpen={setOpen} />
                        </SheetContent>
                    </Sheet>
                </nav>

                <div className='flex flex-row me-5 gap-5'>
                    <IoBag size={40} />
                </div>
            </div>
        </header>
    )
}

export default Header
