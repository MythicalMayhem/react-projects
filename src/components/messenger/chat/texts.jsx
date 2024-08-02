import { useState } from 'react'
import { userStore } from '../../../stores/userStore'
import { chatStore } from '../../../stores/chatStore'

import './chat.css'
export const Texts = () => {
    const { user } = userStore()
    const { messages } = chatStore()
    const receipiantid = 0
    // eslint-disable-next-line no-unused-vars
    const message = (content, key,sender) => {
        return <div key={key} className={"message " + (user.id === sender.id ? 'sent' : 'received')}> {content}</div >
    }
 

    return (
        <div className="texts">
            {messages.map((msg, index) => message(msg, index))}
        </div>
    );
}
