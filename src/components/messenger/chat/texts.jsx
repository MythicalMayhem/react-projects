
import { chatStore } from '../../../stores/chatStore'
import { userStore } from '../../../stores/userStore'

import './chat.css'

export const Texts = () => {
    const { user } = userStore()
    const { chat } = chatStore()
    const message = (msg, key) => {
        return <div key={key} className={"message " + (user.id === msg.sender.id ? 'sent' : 'received')}> {msg.text}</div>
    } 
    return (
        <div className="texts">
            {chat?.messages.map(message)}
        </div>
    );
}