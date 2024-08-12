
import { useEffect, useRef } from 'react'
import { chatStore } from '../../../stores/chatStore'
import { userStore } from '../../../stores/userStore'

import './chat.css' 

export const Texts = () => {
    const { user } = userStore()
    const { chat } = chatStore()
    const chatRef = useRef()
    const message = (msg, key) => {
        return <div key={key} className={"message " + (user.id === msg.sender.id ? 'sent' : 'received')}>
            <p>{msg.text}</p>
            {msg.files?.map((f,i)=>{
                return <img src={f} key={i} alt="" className='imgmsg' />
            })}
        </div>
    }
 
    useEffect(() => {
        chatRef?.current?.scrollIntoView({ behavior: "smooth" })
    }, [chat]) 
    return (chat?
        <div className="texts">
            {chat?.messages.map(message)}
            <div ref={chatRef} />
        </div>: 'SELECT A CHAT TO SEE MESSAGES'
    );
}