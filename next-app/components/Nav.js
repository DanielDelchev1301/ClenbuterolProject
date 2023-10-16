'use client';

import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from 'react';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import '@/styles/nav.css'

function Nav() {
    const [showMenu, setShowMenu] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        setIsAdmin(JSON.parse(window.localStorage.getItem('user'))?.admin);
    }, []);

    return (
        <div className="headerContainer">
            <div className="basketContainer">
                <Link href="/cart" className="linkForCart">
                    <ShoppingBasketIcon className="shoppingBasketIcon"/>
                </Link>
            </div>
            <button className="navBarMenuButton" onClick={() => setShowMenu(!showMenu)} onMouseEnter={() => setShowMenu(true)}>
                <MenuIcon className="menuIcon"/>
            </button>
            <div className={`menuOptions ${showMenu ? 'visible' : ''}`}  onClick={() => setShowMenu(false)} onMouseLeave={() => setShowMenu(false)}>
                <Link href="/" className="link">Home</Link>
                <Link href="/shop" className="link">Shop</Link>
                <Link href="/aboutUs" className="link">About Us</Link>
                <Link href="/contactUs" className="link">Contact Us</Link>
                {isAdmin && <Link href="/adminPanel" className="link">Admin</Link>}
            </div>
        </div>
    );
}

export default Nav;