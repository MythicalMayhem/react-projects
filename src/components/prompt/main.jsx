import './prompt.css'
function Prompt({ title, desc, options }) { 
    const wrapper =
        <div className="prompt-wrapper"   >
            <h1>{title || 'Alert'}</h1>
            <h2>{desc || ''}</h2>
            <hr />
            <div className="buttons"> {options.map((option, i) => <button key={i} onClick={() => { option.handle(); }}>{option.label}</button>)} </div>
        </div>

    return wrapper
}

export default Prompt;