import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='bg-secondary text-primary'>
        <div className='flex flex-row justify-between p-5 sm:px-2 sm:py-4 sm:flex-col sm:gap-4'>
            <Link to='/'>
            <h1 className='font-bold sm:flex sm:justify-center text-fourth text-2xl gap-3'><i class="ri-shield-user-fill text-2xl"></i>Auth App</h1>
            </Link>
            <ul className='flex flex-row gap-16 mr-10 sm:gap-0 sm:mr-2 sm:justify-between'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/sign-in'>SignIn</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Header