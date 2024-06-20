"use client"
import React from 'react'
import './Navbar.css'
import Link from 'next/link'
import Hamburger from 'hamburger-react'
import { useState } from 'react'

export default function Navbar() {
    const [isOpen, setOpen] = useState(false)
    const handleMenu = () => {
        if (isOpen) {
            setOpen(false)
        }
        else {
            setOpen(true)
        }
    }

    return (
        <main>
            <nav className='navbar-wrapper'>
                <div className='logo'>
                    <h1>Victor</h1>
                </div>
                <div className="nav-items">
                    <ul>
                        <li><Link href='#home'>Home</Link></li>
                        <li><Link href='#home'>About</Link></li>
                        <li><Link href='#home'>Skill</Link></li>
                        <li><Link href='#home'>Porfolio</Link></li>
                    </ul>
                    <div className="hamburger" onClick={() => setOpen(!isOpen)}>
                        <Hamburger size={24} color="white" />
                        {/* <Hamburger onToggle={toggled => {
                        if (toggled) {
                            // open a menu
                        } else {
                            // close a menu
                        }
                    }} /> */}
                    </div>

                </div>

                {
                    isOpen ? (
                        
                        <div className="mobile-nav">
                          
                            <Link className='nav-links' href='#home'>Home</Link>
                            <Link className='nav-links' href='#home'>About</Link>
                            <Link className='nav-links' href='#home'>Skill</Link>
                            <Link className='nav-links' href='#home'>Porfolio</Link>
                        </div>


                            


                    ) : null
                }

            </nav>
        </main>
    )
}
