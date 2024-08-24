import './chat.css'
import { Input } from "./input";
import { RecipientHeader } from "./recipient";
import { Texts } from "./texts"; 

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