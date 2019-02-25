import React, { useContext } from 'react'
import UserContext from '../context/UserContext'
import AuthContext from '../context/AuthContext'

const GrandChild = props => {
  const userContext = useContext(UserContext)
  const authContext = useContext(AuthContext)
  return (
    <React.Fragment>
      <div>
        {authContext.isAuthenticated ? authContext.name : 'Please login'}
      </div>
      <p>
        This is grand child component, I also can see there are{' '}
        {userContext.users.length} users in the context
      </p>
    </React.Fragment>
  )
}

export default GrandChild
