import { useState } from 'react';
import './chat.css'
import { chatStore } from '../../../stores/chatStore';
import { userStore } from '../../../stores/userStore';
import wrap from "../../../lib/upload";

export const Input = () => {
    const { chat, sendMessage, setChat } = chatStore()
    const { user } = userStore()
    const [text, setText] = useState('')
    const [img, setImg] = useState({ url: '', file: null })

    const handleSend = async (e) => {
        e.preventDefault();
        if (!chat || !text) return
        setImg({ url: '', file: null })
        setText('')
        await sendMessage(chat.id, text, user, img.file)
            .then(() => { setChat(chat.id) })
    }
    console.log('render');
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
                    {!wrap.currentlyUplading && <label class="file-input__label" htmlFor="file-input"> <img className='icon' src="SVG/uploadImage.svg" alt="img" /></label>}
                </div>
                {img.url && <div className='file' style={{ backgroundImage: `url(${img.url})` }}> <img className='trashicon' src="SVG/trash.svg" onClick={() => setImg({ url: '', file: null })} alt="" /> </div>}

                <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder={wrap.currentlyUplading && 'uploadingImage' + Math.round(wrap.currentProgress) + '%'} />
                <img className='icon' src="SVG/sendMessage.svg" alt="img" onClick={handleSend} />
            </form> : <div></div>
    );
}
