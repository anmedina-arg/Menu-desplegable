import Category from "./components/category/category.js"
import styles from "../src/components/category/category.module.css"

function App() {
  return (
    <div styles={styles.prueba}>
      <ul>
        <h1>hola mundo!</h1>
        <Category name="Lenguajes" items={["HTML", "JS", "CSS"]}/>
        <Category name="Frameworks" items={["Express", "Simphony", "Spring"]}/>
        <Category name="Estructura" items={["Div", "Lista", "Header", "Footer"]}/>
        <Category name="Enlaces" items={["Enlace 1", "Enlace 2", "Enlace 3"]}/>
      </ul>
    </div>
  );
}

export default App;
