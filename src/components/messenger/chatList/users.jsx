import { useEffect, useState } from "react";
import { userStore } from '../../../stores/userStore.js'
import { chatStore } from '../../../stores/chatStore.js'
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../../lib/firebase.js";
export const Users = () => {
    const { user } = userStore()
    const { setChat } = chatStore()
    const [chatRows, setChatRows] = useState(user.chats || [])

    useEffect(() =>
        onSnapshot(doc(db, 'users', user?.id), (doc) => {
            setChatRows(doc.data().chats)
        }),[user.id])


    const chatRow = (chat, key) =>
        <div key={key} onClick={() => setChat(chat.id)} className="chatRow">
            <img className="pfp" src="logo192.png" alt="" />
            <span>{chat.name}</span>
        </div>

    return (
        <div className="rows">
            {console.log('chatRows', chatRows)  }
            {chatRows.map((chat, key) => { ; return chatRow(chat, key) })}
        </div>
    );
}
