import styles from "./Categories.module.css"

const Categories = ({categories, setSelectedCategory, selectedCategory}) => {
  return (
    <div className={styles.categories}>
      {categories.map((item) => {
        return (
          <button key={item} className={selectedCategory === item ? styles.active : styles.item} onClick={() => setSelectedCategory(item)}>
            {item}
          </button>
        )
      })}
    </div>
  )
}

export default Categories