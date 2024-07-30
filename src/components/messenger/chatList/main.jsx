import { UserInfo } from "./userInfo";
import { Search } from "./search";
import { Chats } from "./chats";

function ChatList() {
    return (
        <div className="chatList" >
            <UserInfo />
            <Search />
            <Chats />
        </div >
    );
}

export default ChatList