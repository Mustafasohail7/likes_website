import '../styles/Header.css'

import logo from '../assets/logo.png'

import { useState } from 'react'
import { AiOutlineCaretDown } from 'react-icons/ai'

import Services from '../data/Services'

const Header = () => {

    const [dropDown,setDropDown] = useState(false)

    const toggleDropDown = () => {
        setDropDown(!dropDown)
        console.log('clicked')
    }

  return (
    <header className="header">
    <div className='header-container'>
        <div className="logo">
            <img src={logo} alt='logo' className='logo-img'/>
            <p>Your Logo</p>
        </div>
        <nav className="nav">
            <div className='services-container' onClick={toggleDropDown}>
                <div className='services'>
                    Services
                    <AiOutlineCaretDown/>
                </div>
                <div className={`dropdown ${dropDown ? 'open' : ''}`}>
                    {Services.map((service) => {
                        const {id, name, icon} = service
                        return (
                            <div className='dropdown-item' key={id}>
                                <div className='dropdown-item-icon'>{icon}</div>
                                <p>{name}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div>Reviews</div>
            <div>Order</div>
            <div>Support</div>
        </nav>
      </div>
    </header>
  )
}

export default Header
