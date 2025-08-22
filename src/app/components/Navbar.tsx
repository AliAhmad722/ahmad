import React from "react";
import Link from "next/link";

const Navebar =()=> {
    return (
<div className='flex justify-between items-center p-2 bg-Whight-500 text-black-500'>
    <Link href="/">Home page</Link>
    <Link href="/about">About page</Link>
    <Link href="/contact">Contact page</Link>
</div>
    )
}

export default Navebar;

