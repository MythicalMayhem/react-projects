import { useEffect, useState } from "react";
import { collection, query, where, and, getDocs } from "firebase/firestore";
import { db } from "../../../lib/firebase";
import Prompt from "../../prompt/main.jsx";
import { userStore } from "../../../stores/userStore.js";

export const Search = () => {

    const [search, setSearch] = useState('')
    const [results, setResults] = useState([])
    const [selected, setSelected] = useState(null)
    const { user, addChat } = userStore()


    useEffect(() => {
        if (!search) { setResults([]); return }

        const usersRef = collection(db, "users")
        const q = query(usersRef, and(where("username", ">=", search), where("username", "<=", search + "\uF8FF")))
        let cancel = false

        getDocs(q).then((snapshot) => {
            if (cancel) return;
            const res = []
            snapshot.forEach((doc) => { res.push(doc.data()) });
            setResults(res)
        })
        return () => cancel = true;
    }, [search])


    const searchResult = (res, i) =>
        <div className="chatRow" key={i} onClick={() => setSelected(res)}>
            <img className="pfp" src={res.avatar || "logo192.png"} alt="" />
            <span>{res.username}</span>
        </div>
    const handleAdd = (recipient) => {
        addChat(user, recipient)
    }
    return (
        <>
            {selected &&
                <Prompt
                    title='Add user'
                    desc={'Are you sure you want to add ' + selected.username + ' ?'}
                    options={[{ label: 'Confirm', handle: () => { handleAdd(selected); setSelected(null) } }, { label: 'Cancel', handle: () => { setSelected(null) } }]}
                />}
            <div className="search  default-flex">
                <input type="text" placeholder="Search for users..." value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())} />
                <button className="icon" type="submit">+</button>
                <div className="search-results"> {results.filter((u) => user.id !== u.id).map(searchResult)} </div>
            </div>
        </>
    );
}
