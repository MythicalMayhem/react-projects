import { useEffect, useState } from "react";
import { collection, query, where, and, getDocs } from "firebase/firestore";
import { db } from "../../../lib/firebase";

export const Search = () => {
    const searchresult = (res) => <div className="chatrow"><img className="pfp" src={res.avatar || "logo192.png"} alt="" /><span>{res.username}</span></div>
    const [search, setSearch] = useState('')
    const [results, setResults] = useState([])

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

    const handleSearch = async (e) => {
        const s = e.target.value.toLowerCase()
        setSearch(s)


    }
    return (
        <div className="search  default-flex">
            <input type="text" placeholder="Search for users..." value={search} onChange={handleSearch} />
            <button className="icon" type="submit">+</button>
            <div className="search-results">
                {results.map(searchresult)}
            </div>
        </div>
    );
}
