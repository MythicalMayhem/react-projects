import './chat.css'
export const Texts = () => {
    let userid = 1
    const receipiantid = 0
    // eslint-disable-next-line no-unused-vars
    const message = (content, key) => {
        userid = (userid+1) % 2;
        return <div key={key} className={"message " + (userid === receipiantid ? 'sent' : 'received')}> {content}</div >
    }
    const messages = [
 
    ]

    return (
        <div className="texts">
            {messages.map((msg, index) => message(msg, index))}
        </div>
    );
}
