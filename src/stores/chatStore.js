import { arrayRemove, arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore";
import { create } from "zustand";
import { db } from "../lib/firebase";



export const chatStore = create((set) => ({
    chatId: null,
    messages: [],
    openChat: async (chatId) => {
        const chatRef = doc(db, 'chats', chatId);
        const chatSnap = await getDoc(chatRef);
        if (chatSnap.exists()) { set({ messages: chatSnap.data() || [], chatId: chatId }); }
        else { console.log("No such document!") }
    },
    sendMessage: async (chatId, text, sender, fileSrc) => {
        const chatRef = doc(db, 'chats', chatId)
        const newMessage = {
            messageId: String(Date.now()) + sender.id,
            text,
            sender,
            at: new Date(),
            files: fileSrc || [],
        }
        await updateDoc(chatRef, { messages: arrayUnion([newMessage]) }).catch(error => console.error('Error adding message: ', error));
    },
    deleteMessage: async (chatId, messageId) => {
        const chatRef = doc(db, 'chats', chatId)
        await updateDoc(chatRef, { messages: arrayRemove(messageId) }).catch(error => console.error('Error deleting message: ', error));
    }
}))