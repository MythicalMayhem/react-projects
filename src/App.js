import { useEffect } from 'react';
import './App.css';
import Signin from './components/signIn';
import Signup from './components/signUp';
import { currentUser } from './stores/user';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from './lib/firebase';

function App() {
  const { user, setUserData } = currentUser()

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => { setUserData(user?.uid) })

    return () => { unSub() }
  }, [setUserData])


  const handleLogout = () => {
    signOut(auth)
      .then(() => { setUserData(null) })
      .catch(console.log)
  }




  return (
    <div className='container' >
      {console.log(user, 'render')}
      {user === null ? <> <Signin /> <Signup /></> : <button onClick={handleLogout}> Logout</button>}

    </div >
  )


}

export default App;
