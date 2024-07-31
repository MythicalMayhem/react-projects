import { UserInfo } from "./userInfo";
import { Search } from "./search";
import { Users } from "./users";
import "./chatList.css";
function ChatList() {
    return (
        <div className="chatList  " >
            <UserInfo />
            <Search />
            <Users />
        </div >
    );
}

export default ChatList