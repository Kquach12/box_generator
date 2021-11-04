import React, {useState} from 'react'

const Form = (props) => {
    const [color, setColor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewBox(color);
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => setColor(e.target.value)}/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default Form