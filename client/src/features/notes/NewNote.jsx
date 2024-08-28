import React from 'react'
import { useSelector } from 'react-redux'
import NewNoteForm from './NewNoteForm' 
import { selectAllUsers } from '../users/usersApiSlice'

const NewNote = () => {
    const users = useSelector(selectAllUsers)

    if (!users?.length) return <p>Not Currently Available</p>

    const content = <NewNoteForm users={users} />
    // const content = users ? <NewNoteForm users={users} /> : <p>Loading...</p>

  return content
}

export default NewNote
