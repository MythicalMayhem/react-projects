export const Chats = () => {
    const chats = [
        'Fred Wright',
        'Charlie Reynolds',
        'Francis Singleton',
        'Franklin Neal',
        'Marian Mullins',
        'Winifred Wells',
    ]
    const chat = (name, key) => <div key={key} className="chatrow"><img src="logo192.png" alt="" />{name}</div>
    return (
        <div className="chats">
            {chats.map((name, index) => chat(name, index))}
        </div>
    );
}
