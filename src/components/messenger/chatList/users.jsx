import { useEffect } from "react";
import { userStore } from '../../../stores/userStore.js'
export const Users = () => {
    const { user } = userStore()
    useEffect(() => { }, [user.chats])

    const chat = (name, key) => <div key={key} className="chatRow"><img className="pfp " src="logo192.png" alt="" /><span>{name}</span></div>
    return (
        <div className="rows">
            {user.chats.map((name, index) => chat(name, index))}
        </div>
    );
}
