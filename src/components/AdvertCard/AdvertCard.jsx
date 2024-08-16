import styles from "./AdvertCard.module.css";
import icons from "../../assets/icons.svg";

const AdvertCard = ({ advert }) => {
  const {
    _id,
    name,
    price,
    rating,
    location,
    adults,
    engine,
    transmission,
    description,
    details: { airConditioner, kitchen, beds },
    gallery,
    reviews,
  } = advert;

  const handleClick = (id) => {
    console.log(id);
  };

  return (
    <div className={styles.advertCard}>
      <img src={gallery[0]} alt={name} className={styles.camperImg} />
      <div className={styles.camperInfo}>
        <div className={styles.camperMainInfo}>
          <h3 className={styles.name}>{name}</h3>
          <div className={styles.likeContainer}>
            <p className={styles.price}>&#8364;{price}.00</p>
            <button type="button" className={styles.likeBtn}>
              <svg width={24} height={24}>
                <use href={`${icons}#heart`}></use>
              </svg>
            </button>
          </div>
        </div>
        <div className={styles.camperAddInfo}>
          <div className={styles.iconsContainer}>
            <svg width={16} height={16} fill=" #ffc531">
              <use href={`${icons}#star`}></use>
            </svg>
            <p
              className={styles.rating}
            >{`${rating}(${reviews.length} Reviews)`}</p>
          </div>
          <div className={styles.iconsContainer}>
            <svg width={16} height={16}>
              <use href={`${icons}#map-pin`}></use>
            </svg>
            <p>{location}</p>
          </div>
        </div>
        <p className={styles.description}>{description}</p>
        <ul className={styles.amenitiesList}>
          <li className={styles.amenity}>{adults} adults</li>
          <li className={styles.amenity}>{transmission}</li>
          <li className={styles.amenity}>{engine}</li>
          {kitchen > 0 && <li className={styles.amenity}>Kitchen</li>}
          <li className={styles.amenity}>{beds} beds</li>
          {airConditioner > 0 && <li className={styles.amenity}>AC</li>}
        </ul>
        <button type="button" onClick={() => handleClick(_id)}>
          Show more
        </button>
      </div>
    </div>
  );
};

export default AdvertCard;
