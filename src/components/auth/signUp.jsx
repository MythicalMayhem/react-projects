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
        <form action="" onSubmit={handleSignup}>
            <h1>Sign Up</h1>
            <input type="text" name="username" placeholder="username" required />
            <input type="email" name="email" placeholder="email" required />
            <input type="password" name="password" placeholder="password" required />
            <input type="submit" value="login" />
        </form>
    );
}

export default Signup;