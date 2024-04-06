import Link from 'next/link'
import React from 'react'

const NavItems = (props:any) => {
    return (
        <ul className="items-center justify-between text-[#757575] w-full gap-5 md:px-10">
            <li className='text-2xl flex flex-col'>
                <Link href={'#printedshirt'} onClick={() => props.setOpen(false)}>
                    Printed T-Shirts
                </Link>
                <Link href={'#solidcolor'} onClick={() => props.setOpen(false)}>
                    Solid Color
                </Link>
                <Link href={'#fullsleves'} onClick={() => props.setOpen(false)}>
                    Full Sleves
                </Link>
                <Link href={'#tradbalakspecial'} onClick={() => props.setOpen(false)}>
                    Trad Balak Special
                </Link>
            </li>
        </ul>
    )

}

export default NavItems