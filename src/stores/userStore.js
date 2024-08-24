import { create } from 'zustand'
import { db } from '../lib/firebase'
import { arrayUnion, collection, doc, getDoc, getDocs, query, setDoc, updateDoc, where } from 'firebase/firestore'

const getChatId = (user1, user2) => { return [user1.id, user2.id].sort().join('-') }

export const userStore = create((set) => ({
    user: null,
    loading: true,
    updateUserData: async (userId) => {
        if (!userId) return set({ user: null })
        const userRef = doc(db, 'users', userId)
        const userDoc = await getDoc(userRef)
 
        if (userDoc.exists()) { set({ user: userDoc.data() }) }
        else { set({ user: null, chats: [] }) }
    },
    addChat: async (currentUser, recipient) => {
        const chatId = getChatId(currentUser, recipient)
        const q = query(collection(db, 'chats'), where('chatId', '==', chatId))
        await getDocs(q).then(async (snapshots) => {
            if (snapshots.empty) {
                const userChatsRef = doc(db, 'users', currentUser.id)
                const recipientChatsRef = doc(db, 'users', recipient.id)

                await setDoc(doc(db, 'chats', chatId), { id: chatId, messages: [], users: [currentUser, recipient],at:new Date(),last:''})
                await updateDoc(userChatsRef, { chats: arrayUnion({ id: chatId, name: recipient.username, avatar: recipient.avatar, }) })
                await updateDoc(recipientChatsRef, { chats: arrayUnion({ id: chatId, name: currentUser.username, avatar: currentUser.avatar, }) })

            } else { console.log('User does not exist') }

        })
        return chatId
    },
    setLoading : (state)=>{
        set({ loading: state })
    }
    
}))
