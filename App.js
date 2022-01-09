import React, { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Table from './components/Table'
import { useSelector } from 'react-redux'

function App() {
  const LOCAL_STORAGE_KEY = 'users'

  const usersLocal = useSelector((state) => state.allUsers.users)
  const [users, setUsers] = useState([])

  console.log('usersLocal:', usersLocal.data, users)

  const removeUserHandler = (id) => {
    const newUserList = usersLocal.data.filter((user) => {
      return user.id !== id
    })
    console.log('App.js', newUserList)
    setUsers(newUserList)
  }

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (retriveContacts) setUsers(retriveContacts)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(users))
  }, [users])

  return (
    <div className='App'>
      <Header />
      <Table getUserId={removeUserHandler} />
    </div>
  )
}

export default App
