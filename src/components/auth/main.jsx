import Signin from "./signIn";
import Signup from "./signUp";
import './auth.css'

function Auth() {
    return (
        <div className="auth">
            <Signin />
            <Signup />
        </div>
    );
}

export default Auth;