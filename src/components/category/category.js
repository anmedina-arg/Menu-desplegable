import { useState } from "react"
import MenuItem from "../menuItem"
import styles from "../category/Category.module.css"


function Category ({name, items}) {

    const [visible, setVisible] = useState("false")

    function showHideMenu (e) {
        e.preventDefault()
        setVisible(!visible)
    }
    return (
        <div>
            <li>
                <h3 onClick={ showHideMenu }>{name}</h3>
                <ul className={ visible ? styles.prop1 : styles.prop2 }>
                    {items.map((item) => <MenuItem name={item} key={item}/>)}
                </ul>
            </li>
        </div>
    )
}

export default Category