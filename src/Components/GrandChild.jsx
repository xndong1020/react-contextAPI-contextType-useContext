import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const GrandChild = props => {
  const userContext = useContext(UserContext)
  return (
    <p>
      This is grand child component, I also can see there are{' '}
      {userContext.users.length} users in the context
    </p>
  )
}

export default GrandChild
