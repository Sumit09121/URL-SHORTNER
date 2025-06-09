import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='h-20 px-5 bg-purple-600 flex justify-between items-center text-white'>
      <div className='logo font-bold text-xl '>
       <Link href='/'>Zipylinks</Link>
      </div>
      <ul className='flex items-center justify-center gap-4'>
        <Link href='/'><li>Home</li></Link>
        <Link href='/about'><li>About</li></Link>
        <Link href='/shorten'><li>Shorten</li></Link>
        <Link href='/contact'><li>Contact us</li></Link>
        <li className=' flex gap-3'>
          <Link href='/shorten'><button className=' bg-purple-300 rounded-lg shadow-lg p-3 py-2 font-bold'>Try Now</button></Link>
          <Link href='/github'><button className=' bg-purple-300 rounded-lg shadow-lg p-3 py-2 font-bold'>Github</button></Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
