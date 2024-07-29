import { create } from 'zustand'
import { db } from '../lib/firebase'
import { doc, getDoc } from 'firebase/firestore'

export const currentUser = create((set) => ({
    user: null,
    setUserData: async (userId) => {
        if (!userId) return set({ user: null  });
        const userRef = doc(db, 'users', userId)
        const userDoc = await getDoc(userRef) 
        if (userDoc.exists()) {set({ user: userDoc.data() })} 
        else { set({ user: null }) }
    }
}))