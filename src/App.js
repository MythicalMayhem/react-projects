import { useEffect } from 'react';

import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from './lib/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { userStore } from './stores/userStore.js';

import './App.css';
import Auth from './components/auth/main.jsx';
import Messenger from './components/messenger/main.jsx';
function App() {
  const { user, updateUserData } = userStore()

  useEffect(() => onAuthStateChanged(auth, (u) => { updateUserData(u?.uid).then(() => console.log('user :>> ', u)); }), [updateUserData])


  const handleLogout = () => {
    signOut(auth)
      .then(() => updateUserData(null))
      .catch(console.log)
  }

  let user1 = { username: 'user1', email: 'user1@gmail.com', password: '123456' }
  let user2 = { username: 'user2', email: 'user2@gmail.com', password: '123456' }
  const users = [user1, user2]

  return (
    <>
      <div className='floats'>
        {users.map((u) => (
          <button key={u.email} onClick={async () => { signInWithEmailAndPassword(auth, u.email, u.password) }}>
            {u.username}
          </button>
        ))}
        <button onClick={handleLogout}> Logout</button>
      </div>
      {/* {user === null ? <> <Auth /> </> : <button onClick={handleLogout}> Logout</button>} */}
      {user === null ? <> <Auth /> </> : <Messenger />}
    </>

  )
}

export default App;
