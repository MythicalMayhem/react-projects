import { useState } from 'react';
import './chat.css'
import { chatStore } from '../../../stores/chatStore';
import { userStore } from '../../../stores/userStore';
import wrap from "../../../lib/upload";

export const Input = () => {
    const { chat, sendMessage } = chatStore()
    const { user } = userStore()
    const [text, setText] = useState('')
    const [img, setImg] = useState({ url: '', file: null })

    const handleSend = async (e) => {
        e.preventDefault();
        if (!chat || !text) return
        await sendMessage(chat.id, text, user, img.file)
        setImg({ url: '', file: null })
        setText('')
    }

    return (
        chat ?
            <form action="" onSubmit={handleSend} className="input" >
                <div className="file-input">
                    <input
                        type="file"
                        id="file-input"
                        className="file-input__input"
                        onChange={(e) => { e.target?.files[0] ? setImg({ url: URL.createObjectURL(e.target.files[0]), file: e.target.files[0] }) : setImg({ url: '', file: null }) }}
                    />
                    <label class="file-input__label" htmlFor="file-input"> <img className='icon' src="SVG/uploadImage.svg" alt="img" /></label>
                </div>
                {img.url && <div className='file' style={{ backgroundImage: `url(${img.url})` }}> <img className='trashicon' src="SVG/trash.svg" onClick={() => setImg({ url: '', file: null })} alt="" /> </div>}
                {wrap.currentlyUplading && <p>uploadingImage {wrap.currentProgress}</p>}
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Type a message..." />
                <img className='icon' src="SVG/sendMessage.svg" alt="img" onClick={handleSend} />
            </form> : <div></div>
    );
}
