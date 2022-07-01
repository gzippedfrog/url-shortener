import { useSelector } from "react-redux";
import UrlList from "../common/UrlList";
import styles from "./MyUrlList.module.scss";

function MyUrlsList() {
  const urls = useSelector((state) => state.urls);

  return (
    <div className={styles.container}>
      <h3>Мои ссылки</h3>
      <UrlList urls={urls} />
    </div>
  );
}

export default MyUrlsList;
