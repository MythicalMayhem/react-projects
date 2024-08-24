import { useEffect } from 'react';

import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from './lib/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { userStore } from './stores/userStore';

import './App.css';
import Auth from './components/auth/main.jsx';
import Messenger from './components/messenger/main.jsx';
import { chatStore } from './stores/chatStore.js';
function App() {
  const { user, loading, setLoading, updateUserData } = userStore()
  const { setChat  } = chatStore()
  useEffect(() => onAuthStateChanged(auth, (u) => {
    setChat()
    updateUserData(u?.uid).then((chats) => { 
      
      setLoading(false) 
    
    })
  }), [updateUserData, setLoading, setChat])


  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        updateUserData(null)
          .then(() => { setLoading(false) })
      })
      .catch((err) => {
        console.log(err);
        setLoading(false)
      })
  }

  let user1 = { username: 'user1', email: 'user1@gmail.com', password: '123456' }
  let user2 = { username: 'user2', email: 'user2@gmail.com', password: '123456' }
  const users = [user1, user2]

  return (
    <>
      <div className='floats'>
        {/* {users.map((u) => (
          <button key={u.email} onClick={async () => { setLoading(true); signInWithEmailAndPassword(auth, u.email, u.password).then(() => { setLoading(false) }) }}>
            {u.username}
          </button>
        ))} */}

        {user && <button onClick={handleLogout}> Logout</button>}
      </div>
      {loading ? <h1>Loading...</h1> : ((user) ? < Messenger /> : <Auth />)}

    </>

  )
}

export default App;
