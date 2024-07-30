import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { db } from "../../lib/firebase"
import { doc, setDoc } from "firebase/firestore";

function Signup() {
    const auth = getAuth()
    const handleSignup = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const { username, email, password } = Object.fromEntries(formData)
        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = {
                    username,
                    id: userCredential.user.uid,
                    chats: [],
                }
                const userRef = doc(db, "users", userCredential.user.uid)
                setDoc(userRef, user)

            })//.catch(console.log)
    }
    return (
        <div className="signup form">
            <form action="" onSubmit={handleSignup}>
                <label htmlFor="username">username</label> <input name="username" type="text" />
                <label htmlFor="email">email      </label> <input name="email" type="email" />
                <label htmlFor="password">password</label> <input name="password" type="password" />
                <input type="submit" />
            </form>
        </div>
    );
}

export default Signup;