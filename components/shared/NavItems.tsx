import Link from 'next/link'
import React from 'react'

const NavItems = (props:any) => {
    return (
        <ul className="items-center justify-between text-[#757575] w-full gap-5 md:px-10">
            <li className='text-2xl flex flex-col'>
                <Link href={'../#asthetic'} onClick={() => props.setOpen(false)}>
                    Asthetic
                </Link>
                <Link href={'../#couples'} onClick={() => props.setOpen(false)}>
                    Couples
                </Link>
                <Link href={'#'} onClick={() => props.setOpen(false)}>
                    Printed T-Shirts
                </Link>
                <Link href={'../#vintage'} onClick={() => props.setOpen(false)}>
                    Vintage
                </Link>
            </li>
        </ul>
    )

}

export default NavItems