import { useEffect, useState } from "react";
import { userStore } from '../../../stores/userStore.js'
import { chatStore } from '../../../stores/chatStore.js'
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../../lib/firebase.js";

export const Users = ({ filter }) => {
    const { user } = userStore()
    const { chat, setChat } = chatStore()
    const [chatRows, setChatRows] = useState(user.chats || [])


    useEffect(() => {
        const unsubs = []
        const userRef = doc(db, 'users', user?.id)

        onSnapshot(userRef, (snap) => {
            setChatRows(snap.data().chats)

            for (let i = 0; i < user?.chats.length; i++) {
                const chatRef = doc(db, 'chats', user.chats[i].id);
                const unsub = onSnapshot(chatRef, (snap) => {
                     
                    if (chat?.id === snap.data().id) {
                        setChat(snap.data())
                    }
                    const q = user?.chats.find((c) => { return c.id === snap.data().id; })
                    q.last = snap.data().last;
                })
                unsubs.push(unsub)
            }
        })
        return () => {
            for (let i = 0; i < unsubs.length; i++) {
                unsubs[i]()
            }
        }
    }, [user?.id, user?.chats,chat?.id, setChat])



    const chatRow = (chat, key) =>
        <div key={key} onClick={() => setChat(chat.id)} className="chatRow">
            <img className="pfp" src={chat.avatar || "SVG/pfp.svg"} alt="" />
            <span>{chat?.name}</span>
            <span>{chat?.last}</span>
            <span>{chat?.at}</span>
        </div>


    return (
        <div className="rows">
            {chatRows.filter((i) => { return i?.name.toLowerCase().includes(filter) }).map((chat, key) => { ; return chatRow(chat, key) })}
        </div>
    );
}
