import React from 'react'

const Button = ({onClick, text, className}) => {
  return (
    <div onClick={onClick} className={`${className} bg-purple-500 text-white px-4 py-2 font-bold rounded-mb`}>
        {text}
    </div>
  )
}

export default Button