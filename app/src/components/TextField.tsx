import React, {useState} from "react";

interface Props {
    text: string
};

const TextField: React.FC<Props> = (props) => {
    const [text, setText] = useState<string>(props.text)
    
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        event.preventDefault();
        setText(event.target.value);
    }

    return (
        <div>
            <input type={"text"} onChange={handleChange} value={text}/>
            <p>{text}</p>
        </div>
    );
}

export default TextField;