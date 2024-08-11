import { userStore } from '../../../stores/userStore.js'
export const UserInfo = () => {
    const { user } = userStore()
    return (
        <div className="userInfo default-flex">
            <img height='25px' src={user.avatar || "SVG/pfp.svg"} className="pfp" alt="" />
            <h2>{user.username}</h2>
            <p style={{ color: 'green' }} >Online</p>
        </div>
    );
}
