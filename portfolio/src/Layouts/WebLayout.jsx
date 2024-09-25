import React, { Suspense } from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const WebLayout = () => {
    const isloggedin = true

    return (
        <>
            <div className='h-screen w-screen overflow-x-hidden '>

                <Navbar/>
                
                        <Suspense fallback={"loading"}>
                            <Outlet/>
                        </Suspense>

                    
            </div>
        </>
    )
}

export default WebLayout