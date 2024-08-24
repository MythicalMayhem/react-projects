import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from '../../lib/firebase'
import { userStore } from "../../stores/userStore"
function Signin() {
    const { setLoading } = userStore()

    const handleSignin = async (e) => {
        setLoading(true)
        try {
            e.preventDefault()
            const formData = new FormData(e.target)
            const { email, password } = Object.fromEntries(formData)
            await signInWithEmailAndPassword(auth, email, password)
                .then((res) => {
                    console.log(res);
                    
                })
            /*.then(console.log)*/.catch(console.log)
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }

    return (
        <form action="#" onSubmit={handleSignin}>
            <h1>Sign In</h1>
            <input type="text" name="email" placeholder="email" required />
            <input type="password" name="password" placeholder="password" required />
            <input type="submit" value="login" />
        </form>
    );
}

export default Signin;