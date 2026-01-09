import React, {useContext, useState} from 'react'
import AppContext from '../../../Context/AppContext'

const Profile = () => {
    const {user} = useContext(AppContext)
  return !user ? (
    <div>Please login</div>
  ) :
  (
    <div>Username : {user.username} </div>
  )
}

export default Profile