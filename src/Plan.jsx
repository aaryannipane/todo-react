import React from 'react'

export const Plan = ({text, id, click}) => {
  return (
    <>
        <li className='shadow p-2 my-2 col-sm-9'>{text}</li>
        <button className="btn btn-danger my-2 col-sm-2  offset-sm-1" onClick={()=> click(id)}>X</button>
    </>
  )
}
