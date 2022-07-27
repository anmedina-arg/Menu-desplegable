import { useState } from "react"


function MenuItem ({name}) {
    const [visible, setVisible] = useState("false")
    return (
        <div>
            <li>
                <a href="#">{name}</a>
            </li>
        </div>
    )
}

export default MenuItem