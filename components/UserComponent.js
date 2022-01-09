import React from 'react'
import './UserComponent.css'
import { useSelector } from 'react-redux'
import { BsFillArchiveFill, BsPencil } from 'react-icons/bs'

function UserComponent(props) {
  const users = useSelector((state) => state.allUsers.users)

  // console.log('UserComponent users:', users.data, users.length)

  return (
    <div>
      {users.data
        ? users.data.map((user) => {
            const { id, email, first_name, last_name, avatar } = user
            return (
              <div key={id}>
                <table className='table table-hover'>
                  <tbody>
                    <tr>
                      <th scope='row' className='align-middle'>
                        {id}
                      </th>
                      <td className='align-middle'>{email}</td>
                      <td className='align-middle'>{first_name}</td>
                      <td className='align-middle'>{last_name}</td>
                      <td>
                        {' '}
                        <img
                          className='userImg'
                          src={avatar}
                          alt={first_name}
                        />
                      </td>
                      <td className='align-middle'>
                        <BsPencil />
                      </td>
                      <td className='align-middle'>
                        <BsFillArchiveFill
                          style={{ cursor: 'pointer' }}
                          onClick={() => props.clickHander(id)}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )
          })
        : '...Loading'}
    </div>
  )
}

export default UserComponent
