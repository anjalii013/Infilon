import React, { useEffect } from 'react'
import axios from 'axios'
import UserComponent from './UserComponent'
import { useSelector, useDispatch } from 'react-redux'
import { setUsers } from '../redux/actions/user-action'

function Table(props) {
  const users = useSelector((state) => state.allUsers.users)
  const dispatch = useDispatch()

  const fetchUsers = async () => {
    const response = await axios
      .get('https://reqres.in/api/users?page=1')
      .catch((err) => {
        console.log('Error reported', err)
      })
    dispatch(setUsers(response.data))
  }

  const deleteUserHandler = (id) => {
    console.log('Table.js', id)
    props.getUserId(id)
  }

  useEffect(() => {
    fetchUsers()
  }, [])
  // console.log('My Users:', users)

  return (
    <div>
      <table className='table text-center'>
        <thead>
          <tr>
            <th scope='col'>Id</th>
            <th scope='col'>Email</th>
            <th scope='col'>First Name</th>
            <th scope='col'>Last Name</th>
            <th scope='col'>Photo</th>
          </tr>
        </thead>
      </table>
      <UserComponent clickHander={deleteUserHandler} />
    </div>
  )
}

export default Table
