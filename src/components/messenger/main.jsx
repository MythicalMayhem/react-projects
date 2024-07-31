import  ChatList  from "./chat/main.jsx";
import  Chat  from "./chatList/main.jsx";
import './messenger.css'
const Messenger = () => {
    return (
        <main className="main-wrapper">
            <Chat />
            <ChatList />
        </main>
    );
}
export default Messenger