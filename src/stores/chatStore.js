import { arrayRemove, arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore";
import { create } from "zustand";
import { db } from '../lib/firebase'



export const chatStore = create((set) => ({
    chat: null,
    setChat: async (chatId) => {
        const chatRef = doc(db, 'chats', chatId);
        const chatSnap = await getDoc(chatRef);
        if (chatSnap.exists()) { set({ chat: { id: chatId, ...chatSnap.data() } }) }
        else { console.log("No such document!") }
    },
    sendMessage: async (chatId, text, sender, fileSrc) => {
        const chatRef = doc(db, 'chats', chatId)
        const newMessage = {
            messageId: String(Date.now()) + sender.id,
            text,
            sender: { username: sender.username, id: sender.id },
            at: new Date(),
            files: fileSrc || [],
        }
        await updateDoc(chatRef, { messages: arrayUnion(newMessage) })
            .then(() => {
                console.log('message added!');
                set((state) => {
                    console.log('message sent', { chat: { ...state.chat, messages: [...state.chat.messages, newMessage] } });
                    return { chat: { ...state.chat, messages: [...state.chat.messages, newMessage] } }
                })
            })
            .catch(error => console.error('Error adding message: ', error));
    },
    deleteMessage: async (chatId, messageId) => {
        const chatRef = doc(db, 'chats', chatId)
        await updateDoc(chatRef, { messages: arrayRemove(messageId) }).catch(error => console.error('Error deleting message: ', error));
    }
}))