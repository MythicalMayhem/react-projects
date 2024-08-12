import { UserInfo } from "./userInfo";
import { Search } from "./search";
import "./chatList.css";
function ChatList() {
 
    
    return (
        <div className="chatList" >
            <UserInfo />
            <Search />
        </div >
    );
}

export default ChatList