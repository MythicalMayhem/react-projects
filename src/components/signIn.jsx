import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from '../lib/firebase'
function Signin() {
    const handleSignin = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const { email, password } = Object.fromEntries(formData)
        await signInWithEmailAndPassword(auth, email, password)/*.then(console.log)*/.catch(console.log)
    }

    return (
        <div className="signin form">
            <form action="" onSubmit={handleSignin}>
                <label htmlFor="email">email </label> <input name="email" type="email" />
                <label htmlFor="password">password</label> <input name="password" type="password" />
                <input type="submit" />
            </form>
        </div>
    );
}

export default Signin;