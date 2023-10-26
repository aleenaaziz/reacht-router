import React, { useState } from 'react'

const ShortCir = () => {
    const [demo, setDemo] = useState("")
    return (
        <div>
            <h1>
                { demo || "technical" }
            </h1>
            <h1>
                { demo && "technical" }
            </h1>
        </div>
    )
}

export default ShortCir
