import { useEffect, useState } from "react";
import { userStore } from '../../../stores/userStore.js'
import { chatStore } from '../../../stores/chatStore.js'
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../../lib/firebase.js";

export const Users = ({ filter }) => {
    const { user } = userStore()
    const { chat, setChat } = chatStore()
    const [chatRows, setChatRows] = useState(user.chats || [])

    useEffect(() =>
        onSnapshot(doc(db, 'users', user?.id), (doc) => {
            setChatRows(doc.data().chats)
        }), [user.id])

    useEffect(() => {
        for (let i = 0; i < user.chats.length; i++) {
            const chatRef = doc(db, 'chats', user.chats[i].id);
            onSnapshot(chatRef, (snap) => {
                if (chat?.id && (snap.data()?.id === chat?.id)) {
                    setChat(chat?.id, user.chats);
                }
                const q = user?.chats.find((c) => { return c.id === snap.data().id; })
                q.last = snap.data().last;
                console.log(q);
                
            })
        }
    }, [chat?.id, user?.chats, setChat,])

    const chatRow = (chat, key) =>
        <div key={key} onClick={() => setChat(chat.id)} className="chatRow">
            <img className="pfp" src={chat.avatar || "SVG/pfp.svg"} alt="" />
            <span>{chat?.name}</span>
            <span>{chat?.last}</span>
            <span>{chat?.at}</span>
        </div>

    console.log(chatRows, user.chats, chat, setChat);

    return (
        <div className="rows">
            {chatRows.filter((i) => { return i?.name.toLowerCase().includes(filter) }).map((chat, key) => { ; return chatRow(chat, key) })}
        </div>
    );
}
