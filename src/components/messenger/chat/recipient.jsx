
import { chatStore } from '../../../stores/chatStore.js'
import './chat.css'
import { userStore } from '../../../stores/userStore.js'
export const RecipientHeader = () => {
    const { chat } = chatStore()
    const { user } = userStore()
    return (
        <div className="recipient">
            <img className='pfp' src="logo192.png" alt="logo" />
            <h2>{chat?.users.filter((u) => { return u.id !== user.id })[0].username}</h2>
        </div>
    );
}

