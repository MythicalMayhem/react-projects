
import { useEffect, useRef } from 'react'
import { chatStore } from '../../../stores/chatStore'
import { userStore } from '../../../stores/userStore'

import './chat.css'

export const Texts = () => {
    const { user } = userStore()
    const { chat } = chatStore()
    const chatRef = useRef()
    const message = (msg, key) => {
        return <div key={key} className={"message " + (user.id === msg.sender.id ? 'sent' : 'received')}> {msg.text}</div>
    } 
    useEffect(() => {
        chatRef.current.scrollIntoView({behavior: "smooth"})

    }, [chat])
    return (
        <div className="texts">
            {chat?.messages.map(message)}
            <div ref={chatRef} />
        </div>
    );
}