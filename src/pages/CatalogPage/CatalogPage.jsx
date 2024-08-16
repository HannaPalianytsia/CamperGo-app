import { useDispatch } from "react-redux";
import AdvertsList from "../../components/AdvertsList/AdvertsList";
import { useEffect, useState } from "react";
import { fetchAdverts, loadMoreAdverts } from "../../redux/adverts/operations";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  useEffect(() => {
    if (page > 1) dispatch(loadMoreAdverts(page));
  }, [dispatch, page]);

  const handleClick = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <h2>CatalogPage</h2>
      <AdvertsList />
      <button type="button" onClick={handleClick}>
        Load more
      </button>
    </div>
  );
};

export default CatalogPage;
