import React from 'react'

export const Error = ({children}) => {
  return (
    <div className='bg-red-600 text-white text-center p-3 uppercase font-bold mb-3 rounded-sm'>{children}</div>
  )
}
