import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { db } from "../../lib/firebase"
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import upload from "../../lib/upload";

function Signup() {
    const auth = getAuth()
    const [pfp, setPfp] = useState('./SVG/pfp.svg')
    const handleSignup = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const { username, email, password ,avatar} = Object.fromEntries(formData)
        await createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                console.log('ther',avatar );
                
                const user = {
                    username,
                    id: userCredential.user.uid,
                    chats: [],
                    avatar: avatar.size ? await upload(avatar) : null ,
                }
                const userRef = doc(db, "users", userCredential.user.uid)
                setDoc(userRef, user)

            }).catch(console.log)
    }

    return (
        <form action="" onSubmit={handleSignup}>
            <h1>Sign Up</h1>
            <img src={pfp} alt="" className="pfp" /><input onChange={(e) => e.target.files[0] ? setPfp(URL.createObjectURL(e.target.files[0])) : null} name="avatar" type="file" />
            <input type="text" name="username" placeholder="username" required />
            <input type="email" name="email" placeholder="email" required />
            <input type="password" name="password" placeholder="password" required />
            <input type="submit" value="sign up" />
        </form>
    );
}

export default Signup;