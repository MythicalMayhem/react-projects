import Signin from "./signIn";
import Signup from "./signUp";
import './auth.css'
import { userStore } from "../../stores/userStore";

function Auth() {
    const { loading, user } = userStore()
    return (

        <div className="auth">
            {(loading || user) && <h1>'Loading...'</h1>}
            <Signin />
            <Signup />
        </div>
    );
}

export default Auth;