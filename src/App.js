import { useEffect } from 'react';

import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from './lib/firebase';

import { currentUser } from './stores/user';

import './App.css';
import Auth from './components/auth/main.jsx';
import Messenger from './components/messenger/main.jsx';
function App() {
  const { user, setUserData } = currentUser()

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => { setUserData(user?.uid) })

    return () => { unSub() }
  }, [setUserData])


  // eslint-disable-next-line no-unused-vars
  const handleLogout = () => {
    signOut(auth)
      .then(() => { setUserData(null) })
      .catch(console.log)
  }

  return (
    <>
      {/* {user === null ? <> <Auth /> </> : <button onClick={handleLogout}> Logout</button>} */}
      {user === null ? <> <Auth /> </> : <Messenger />}
    </>

  )


}

export default App;
