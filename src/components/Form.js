import React, {useState} from 'react'

const Form = (props) => {
    const [color, setColor] = useState("");
    const [size, setSize] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewBox({"color": color, "size": size});
        setColor("")
        setSize("")
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={color} onChange={(e) => setColor(e.target.value)}/>
                <input type="number" value={size} onChange = {(e) => setSize(e.target.value)}/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default Form