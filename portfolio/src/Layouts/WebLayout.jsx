import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const WebLayout = () => {
    return (
        <div className='h-screen w-screen overflow-hidden'>
            <Suspense fallback={"loading"}>
                <Outlet />
                
            </Suspense>
        </div>
    );
}

export default WebLayout;
