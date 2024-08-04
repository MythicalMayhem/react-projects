import { useEffect, useState } from 'react'
import { userStore } from '../../../stores/userStore'
import { chatStore } from '../../../stores/chatStore'

import './chat.css'
export const Texts = () => {
    const { user } = userStore()
    const messages = []
    
    const message = (content, key, sender) => {
        return <div key={key} className={"message " + (user.id === sender.id ? 'sent' : 'received')}> {content}</div >
    }


    return (
        <div className="texts">
            {messages.length>0 && messages.map((msg, index) => message(msg, index))}
        </div>
    );
}
