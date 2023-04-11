import { useState } from 'react'
import { Link } from 'react-router-dom'


function App() {

  return (
    <div className=" bg-mainBg h-screen">
      <div className=' px-20 py-10'>
        <h1 className=' text-3xl font-bold'>Car Rental</h1>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              
              <li>
                <Link to='/about'>About</Link>
              </li>
        
              <li>
                <Link to='/contact'>contact</Link>
              </li>
              
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default App
