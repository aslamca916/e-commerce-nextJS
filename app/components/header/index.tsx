"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import * as cookies from "js-cookie";



const Header = () => {
    const [userToken,setUserToken] = useState(null);

    useEffect(()=>{
        // const uToken = getCookie("token");
        // const utoken = cookies.get("token");
        console.log("ustoken",userToken)
        // setUserToken(uToken);
        console.log("tokn",userToken)
    },[])

  return (
    
        <nav className="bg-white shadow-lg" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
                <div className="flex">
                    <div className="-ml-2 mr-2 flex items-center">
                        <a href="/" className="text-lg font-semibold text-gray-900">eCommerce Store</a>
                    </div>
                </div>
                <div className="flex items-center cart">
                {/* <Link href="/cart" className="text-gray-900 hover:text-gray-600">Cart</Link> */}
                    {userToken && <Link href="/cart" className="text-gray-900 hover:text-gray-600">Cart</Link>}
                </div>
                <div className="flex items-center">
                   
                    {userToken? <Link href="/cart" className="text-gray-900 hover:text-gray-600">Logout</Link> : <Link href="/login" className="text-gray-900 hover:text-gray-600">Login</Link>}
                </div>
                
            </div>
        </div>
    </nav>
    
  )
}

export default Header