import './prompt.css'
function Prompt({ title, desc, options, init }) {
    if (!title || !desc || !options) return

    console.log('title, desc, options, init', title, desc, options, init)
    const wrapper =
        <div className="prompt-wrapper" style={{ display: init ? 'block' : 'none' }} >
            <h1>{title}</h1>
            <h2>{desc}</h2>
            <div className="buttons"> {options.map((option, i) => <button key={i} onClick={() => { option.handle(); }}>{option.label}</button>)} </div>
        </div>

    return wrapper
}

export default Prompt;