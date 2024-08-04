import { useState } from 'react';
import './chat.css'
import { chatStore } from '../../../stores/chatStore';
import { userStore } from '../../../stores/userStore';
export const Input = () => {
    const [text, setText] = useState('')
    const { chat, sendMessage } = chatStore()
    const { user } = userStore()

    const handleSend = (e) => {
        e.preventDefault();
        if (!chat || !text) return
        console.log('Sending message', chat.id, text, user, [])
        sendMessage(chat.id, text, user, [])
        setText('')
    }
    return (
        <div className="input">
            <form action="" onSubmit={handleSend}><input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Type a message..." /></form>
            <img className='icon' src="logo192.png" alt="file" />
            <img className='icon' src="logo192.png" alt="emoji" />
        </div>
    );
}
