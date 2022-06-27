import React from 'react'

const Input = ({ name, label, type, value, onChange }) => {
  return (
    <div className='h-10 rounded-sm mb-2 mt-2'>
        <input
            type={type}
            name={name}
            id={name}
            placeholder={label}
            value={value}
            onChange={onChange}
            className="h-full w-full p-1 rounded-sm bg-transparent focus:bg-blue-50 outline-none border-b-2 duration-300 focus:border-blue-500"
        />
    </div>
  )
}

export default Input