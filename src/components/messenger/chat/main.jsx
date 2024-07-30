import { Input } from "./input";
import { RecipientHeader } from "./recipient";
import { Texts } from "./texts";
import './chat.css'
function Chat() {
    return (
        <div className="chat">
            <RecipientHeader />
            <Texts />
            <Input />
        </div>
    );
}
export default Chat