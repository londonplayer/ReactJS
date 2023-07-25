import {useState} from 'react'

const ListRender = () => {

    const [list] = useState(['Vitor', 'Carlos', 'Roger'])
    const [users, setUsers] = useState([
        {id: 1, name: 'Vitor', age: 22}, 
        {id: 2, name: 'Carlos', age: 23},
        {id: 3, name: 'Roger', age: 34}
    ])

    const remakeUsers = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    }
    
  return (
    <div>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name} - {user.age}</li>
            ))}
        </ul>
        <p>Click below to remake the list without a random user</p>
        <button onClick={remakeUsers}>Remake</button>
    </div>
  )
}

export default ListRender