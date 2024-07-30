import  ChatList  from "./chat/main.jsx";
import  Chat  from "./chatList/main.jsx";

const Messenger = () => {
    return (
        <main className="main wrapper">
            <ChatList />
            <Chat />
        </main>
    );
}
export default Messenger