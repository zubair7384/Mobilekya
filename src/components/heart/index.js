import React, { useState } from 'react'
import "./heart.scss"

function Heart(props) {
    const [click, setClick] = useState(true)
    return (
        <div onClick={() => setClick(!click)} className={`heart-wrapper ${props.className}`}>
            {
                click ? <i class="heart outline icon"></i> : <i class="heart icon"></i>
            }
            <p className="heart-count">208</p>
        </div>
    )
}
export default Heart;
