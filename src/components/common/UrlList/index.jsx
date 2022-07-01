import styles from "./UrlList.module.scss";

function UrlList({ urls }) {
  return (
    <>
      <ul className={styles.urlList}>
        {urls?.map(({ id, url, short_url, clicks }) => (
          <li className={styles.urlItem} key={id}>
            <span className={styles.id}>{id}</span>
            <span className={styles.links}>
              <a href={url}>{url}</a>
              <a href={short_url}>{short_url}</a>
            </span>
            <span className={styles.clicks}>{clicks}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default UrlList;
