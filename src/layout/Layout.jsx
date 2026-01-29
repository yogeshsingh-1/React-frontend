import React from 'react'
import { Navbar, Footer } from '../components'
import { Outlet } from 'react-router-dom'
const Layout = () => {
    return (
        <>
            <div className='w-full min-h-screen flex flex-col'>
                <Navbar />
                <main className='flex-1 bg-red-200'>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    )
}

export default Layout