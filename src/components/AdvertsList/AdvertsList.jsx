import { useSelector } from "react-redux";
import AdvertCard from "../AdvertCard/AdvertCard";
import {
  selectAdverts,
  selectIsAllAdvertsLoaded,
} from "../../redux/adverts/selectors";

const AdvertsList = ({ handleLoadMoreClick }) => {
  const adverts = useSelector(selectAdverts);
  const isAllAdvertsLoaded = useSelector(selectIsAllAdvertsLoaded);

  //   console.log(adverts);
  return (
    <div>
      <ul>
        {adverts.map((advert) => (
          <li key={advert._id}>
            <AdvertCard advert={advert} />
          </li>
        ))}
      </ul>
      {!isAllAdvertsLoaded && (
        <button type="button" onClick={handleLoadMoreClick}>
          Load more
        </button>
      )}
    </div>
  );
};

export default AdvertsList;
