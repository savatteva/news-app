import NewsItem from "../NewsItem/NewsItem";
import styles from "./NewsList.module.css";

const NewsList = ({ news }) => {
  return (
    <ul className={styles.list}>
      {news.map((item) => {
        return <NewsItem key={item.id} item={item}></NewsItem>;
      })}
    </ul>
  );
};

export default NewsList;
