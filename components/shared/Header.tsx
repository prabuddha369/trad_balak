'use client';
import React, { useEffect, useState } from "react";
import { Dancing_Script } from 'next/font/google'
import { EB_Garamond } from 'next/font/google'
import { IoBag } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import NavItems from "./NavItems";
import Image from "next/image";

const dancing_script = Dancing_Script({ subsets: ["latin"] });
const eb_garamond = EB_Garamond({ subsets: ["latin"] });

const Header = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <header className='fixed z-10 top-0 w-full h-fit py-4 flex flex-row border-b border-[#d9d9d9] justify-between place-items-center bg-[#ab2424] text-white'>
            <div className="ms-5">
                <div className='flex flex-row text-3xl md:text-5xl gap-2 place-items-center'>
                    <p className={`${eb_garamond.className} text-4xl md:text-6xl`}>TRAD</p>
                    <p className={`text-white ${dancing_script.className}`}>Balak</p>
                </div>
                <p>Elegance Redefined Here</p>
            </div>

            <div className="flex flex-row gap-5">
                <nav>
                    <Sheet open={isOpen} onOpenChange={setOpen}>
                        <SheetTrigger className="align-middle">
                            <AiOutlineMenu size={30} />
                        </SheetTrigger>
                        <SheetContent
                            className="flex flex-col bg-white w-[1/3] text-black"
                            side={"left"}
                        >
                            <div className="flex gap-5 place-items-center">

                                <span className="text-2xl flex flex-row place-items-center">
                                    <p className={`${eb_garamond.className} text-3xl pe-2`}>TRAD</p>
                                    <p className={`text-[#bfa163] ${dancing_script.className}`}>Balak</p>
                                </span>
                            </div>
                            <Separator className="border border-gray-50/80" />
                            <NavItems setOpen={setOpen} />
                        </SheetContent>
                    </Sheet>
                </nav>

                <div className='flex flex-row me-5 gap-5'>
                    <IoBag size={30} />
                </div>
            </div>
        </header>
    )
}

export default Header
