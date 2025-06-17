import React from 'react'

function Button({
    children,
    className = '',
    type,
    bgColor = "bg-blue-600",
    textColor = 'text-white',
    ...props
}) {
  return (
    <button className= {`px-4 py-2 rounded-b-lg ${className} ${bgColor} ${textColor} `} {...props}>
      {children}
    </button>
  )
}

export default Button
