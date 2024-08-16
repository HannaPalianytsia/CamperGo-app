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
    <div>
      <img src={gallery[0]} alt={name} />
      <div>
        <div>
          <h2>{name}</h2>
          <p>E{price}.00</p>
        </div>
        <div>
          <p>{`${rating}(${reviews.length} Reviews)`}</p>
          <p>{location}</p>
        </div>
        <p>{description}</p>
        <ul>
          <li>{adults} adults</li>
          <li>{transmission}</li>
          <li>{engine}</li>
          {kitchen > 0 && <li>Kitchen</li>}
          <li>{beds} beds</li>
          {airConditioner > 0 && <li>AC</li>}
        </ul>
        <button type="button" onClick={() => handleClick(_id)}>
          Show more
        </button>
      </div>
    </div>
  );
};

export default AdvertCard;
