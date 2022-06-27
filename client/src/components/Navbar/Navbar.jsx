import React from 'react'

const Navbar = ({ logo }) => {
  return (
    <nav className='flex sticky items-centerjustify-between p-3 pl-5 pr-5 shadow-sm backdrop-blur-md bg-slate-50'>
      <div className="container mr-auto ml-auto">
        <h1 className="text-3xl flex items-center font-norican text-blue-600
        ">
          {/* <div className="w-8 mr-3">
            <img src={logo} alt="moment logo" />
          </div> */}
          Memories
        </h1>
      </div>

    </nav>
  )
}

export default Navbar