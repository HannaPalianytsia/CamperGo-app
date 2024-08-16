import { useDispatch } from "react-redux";
import AdvertsList from "../../components/AdvertsList/AdvertsList";
import { useEffect, useState } from "react";
import { fetchAdverts, loadMoreAdverts } from "../../redux/adverts/operations";
import styles from "./CatalogPage.module.css";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  // useEffect(() => {
  //   dispatch(fetchAdverts());
  // }, [dispatch]);

  // useEffect(() => {
  //   if (page > 1) dispatch(loadMoreAdverts(page));
  // }, [dispatch, page]);

  const handleLoadMoreClick = () => setPage(page + 1);

  return (
    <div className={styles.catalogPage}>
      <AdvertsList handleLoadMoreClick={handleLoadMoreClick} />
    </div>
  );
};

export default CatalogPage;
