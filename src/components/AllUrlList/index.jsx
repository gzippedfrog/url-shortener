import { useCallback, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import Pagination from "@mui/material/Pagination";
import UrlList from "../common/UrlList";
import styles from "./AllUrlList.module.scss";

const GET_URLS = gql`
  query GetUrls($page: Int) {
    short_urls(page: $page) {
      data {
        id
        url
        short_url
        clicks
      }
      paginatorInfo {
        count
        firstItem
        currentPage
        hasMorePages
        lastItem
        lastPage
        perPage
        total
      }
    }
  }
`;

function AllUrlList() {
  const [page, setPage] = useState(1);
  const { loading, error, data } = useQuery(GET_URLS, {
    variables: { page }
  });
  const items = data?.short_urls?.data;
  const pages = data?.short_urls?.paginatorInfo?.lastPage;
  console.log("data", data);

  const handleClick = useCallback((e) => {
    setPage(+e.target.innerText);
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message} </p>;

  return (
    <div className={styles.container}>
      <h3>Список ссылок</h3>
      <UrlList
        urls={items}
        setPage={setPage}
        currentPage={page}
        pages={pages}
      />
      <Pagination
        variant="outlined"
        shape="rounded"
        page={page}
        count={pages}
        onClick={handleClick}
      />
    </div>
  );
}

export default AllUrlList;
