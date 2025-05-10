import React from 'react'
import {Link, Outlet} from 'react-router-dom'
const NestedRouting = () => {
  return (
    <>
    <h2>Company</h2>
    <Link to='student'>Student</Link> <br></br>
    <Link to='faculty'>Faculty</Link>
    <Outlet />
    </>
  )
}

export default NestedRouting