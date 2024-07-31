export const Users = () => {
    const chats = [ 

    ]
    const chat = (name, key) => <div key={key} className="chatrow"><img className="pfp " src="logo192.png" alt="" /><span>{name}</span></div>
    return (
        <div className="rows">
            {chats.map((name, index) => chat(name, index))}
        </div>
    );
}
