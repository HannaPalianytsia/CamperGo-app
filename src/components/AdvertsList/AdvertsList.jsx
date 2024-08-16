import { useSelector } from "react-redux";
import AdvertCard from "../AdvertCard/AdvertCard";
import {
  selectAdverts,
  selectIsAllAdvertsLoaded,
} from "../../redux/adverts/selectors";
import { adverts } from "./adverts";
import styles from "./AdvertsList.module.css";

const AdvertsList = ({ handleLoadMoreClick }) => {
  // const adverts = useSelector(selectAdverts);
  const isAllAdvertsLoaded = useSelector(selectIsAllAdvertsLoaded);

  return (
    <div className={styles.advertsList}>
      <ul>
        {adverts.map((advert) => (
          <li key={advert._id}>
            <AdvertCard advert={advert} />
          </li>
        ))}
      </ul>
      {!isAllAdvertsLoaded && (
        <button
          className={styles.loadMoreBtn}
          type="button"
          onClick={handleLoadMoreClick}
        >
          Load more
        </button>
      )}
    </div>
  );
};

export default AdvertsList;
