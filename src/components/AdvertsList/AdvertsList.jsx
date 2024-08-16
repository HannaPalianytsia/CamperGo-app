import { useSelector } from "react-redux";
import AdvertCard from "../AdvertCard/AdvertCard";
import { selectAdverts } from "../../redux/adverts/selectors";

const AdvertsList = () => {
  const adverts = useSelector(selectAdverts);

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
    </div>
  );
};

export default AdvertsList;
