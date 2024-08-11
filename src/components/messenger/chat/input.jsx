import { useState } from 'react';
import './chat.css'
import { chatStore } from '../../../stores/chatStore';
import { userStore } from '../../../stores/userStore';
export const Input = ({ send }) => {
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
        <form action="" onSubmit={handleSend} className="input" >
            <img className='icon' src= "SVG/uploadImage.svg" alt="img" />
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Type a message..." />
            <img className='icon' src="SVG/sendMessage.svg" alt="emoji" />
        </form>
    );
}
