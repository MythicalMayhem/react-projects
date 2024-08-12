import { arrayRemove, arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore";
import { create } from "zustand";
import { db } from '../lib/firebase'
import wrap from "../lib/upload";


export const chatStore = create((set) => ({
    chat: null,
    setChat: async (chatId) => {
        const chatRef = doc(db, 'chats', chatId);
        const chatSnap = await getDoc(chatRef);
        if (chatSnap.exists()) { set({ chat: { id: chatId, ...chatSnap.data() } }) }
        else { console.log("No such document!") }
    },
    sendMessage: async (chatId, text, sender, file) => {
        const chatRef = doc(db, 'chats', chatId)
        const newMessage = {
            messageId: String(Date.now()) + sender.id,
            text,
            sender: { username: sender.username, id: sender.id },
            at: Date.now(),
            files: file ? [await wrap.upload(file)] : null,
        }

        await updateDoc(chatRef, { messages: arrayUnion(newMessage), last: text, at: Date.now() })
            .then(() => { console.log('message added!'); })
            .catch(error => console.error('Error adding message: ', error));
    },
    deleteMessage: async (chatId, messageId) => {
        const chatRef = doc(db, 'chats', chatId)
        await updateDoc(chatRef, { messages: arrayRemove(messageId) }).catch(error => console.error('Error deleting message: ', error));
    }
}))