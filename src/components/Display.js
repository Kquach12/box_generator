import React, {useState} from 'react'

const Display = (props) => {
    const boxArray = props
    return(
        <div>
            {
                props.boxArray.map((box, index) =>
                <div key={index} style={{
                    display: "inline-block",
                    height: `${box.size}px`,
                    width:`${box.size}px`,
                    backgroundColor: box.color,
                    margin:"5px"
                }}></div>
                )
            }
        </div>
    )
}

export default Display