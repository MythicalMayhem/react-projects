import { create } from 'zustand'
import { db } from '../lib/firebase'
import { arrayUnion, doc, getDoc, updateDoc } from 'firebase/firestore'

export const userStore = create((set) => ({
    user: null,
    updateUserData: async (userId) => {
        if (!userId) return set({ user: null });
        const userRef = doc(db, 'users', userId)
        const userDoc = await getDoc(userRef)
        if (userDoc.exists()) { set({ user: userDoc.data() }) }
        else { set({ user: null }) }
    },
    addChat: async (currentUser, recipient) => {
        const userChatsRef = doc(db, 'users', currentUser.id)
        if (currentUser.chats.indexOf(recipient.id) !== -1) console.log('user already in chats')
        else await updateDoc(userChatsRef, { chats: arrayUnion(recipient.id) })

        const recipientChatsRef = doc(db, 'users', recipient.id)
        if (recipient.chats.indexOf(currentUser.id) !== -1) console.log('user already in chats')
        else await updateDoc(recipientChatsRef, { chats: arrayUnion(currentUser.id) })

    }
}))