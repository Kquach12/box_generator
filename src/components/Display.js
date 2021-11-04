import React, {useState} from 'react'

const Display = (props) => {
    const newBox = props
    return(
        <div>
            {
                props.box.map((color, index) =>
                <div key={index} style={{
                    display: "inline-block",
                    height: "50px",
                    width:"50px",
                    backgroundColor: color,
                    margin:"5px"
                }}></div>
                )
            }
        </div>
    )
}

export default Display