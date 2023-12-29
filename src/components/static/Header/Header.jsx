import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../Header/header.css'
import { LuShoppingBasket } from "react-icons/lu"
import { BasketContext } from '../../../context/BasketContext'

const Header = () => {
    const { basketCount } = useContext(BasketContext)
    return (
        <header>
            <div className="container py-3 border-bottom">
                <div className="row">
                    <div className="col-lg-2">
                        <div className="logo">
                            <Link to='/' >FinalProj</Link>
                        </div>
                    </div>
                    <div className="col-lg-10 text-end">
                        <nav>
                            <NavLink to='/' >Home</NavLink>
                            <NavLink to='/products' >Products</NavLink>
                            <NavLink to='/basket' ><LuShoppingBasket /> <sup>{basketCount}</sup></NavLink>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header