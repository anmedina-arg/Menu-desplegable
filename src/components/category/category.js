import { useState } from "react"
import MenuItem from "../menuItem"


function Category ({name, items}) {
    const [visible, setVisible] = useState("false")
    return (
        <div>
            <li>
                <h3>{name}</h3>
                <ul>
                    {items.map((item) => <MenuItem name={item} key={item}/>)}
                </ul>
            </li>
        </div>
    )
}

export default Category