import React, { useState } from 'react'

function DisplayBox(props) {



  return (
    <>
      {
      props.color.map( (color,i) => { 
      return <div key={i} style={{backgroundColor: `${color}`, width:"100px", height:"100px"}}></div>
      }
      )      
      }
    </>
  )
}
export default DisplayBox