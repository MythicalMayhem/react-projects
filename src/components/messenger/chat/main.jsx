import { Input } from "./input";
import { RecipientHeader } from "./recipient";
import { Texts } from "./texts";
import './chat.css'
import { chatStore } from "../../../stores/chatStore";
function Chat() {
    const { chat } = chatStore()
    return (
        <div className="chat">
            {console.log('chatId', chat)}
            <RecipientHeader />
            <Texts />
            <Input />
        </div>
    );
}
export default Chat