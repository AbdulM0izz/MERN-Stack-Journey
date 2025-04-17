import React from 'react'

const Employe = (Props) => {
  return (
    <>
    <h2> {Props.data.name}</h2>
    <h2> {Props.data.email}</h2>
    <h2> {Props.data.contact}</h2>
    </>
  )
}

export default Employe