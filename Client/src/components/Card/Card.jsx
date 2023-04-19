import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  addFav,
  removeFav,
  myFavorites,
}) {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      removeFav(id.toString());
    } else {
      addFav({ id, name, status, species, gender, origin, image });
    }
    setIsFav(!isFav);
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={style.cardContainer}>
      <button onClick={() => onClose(id)}>X</button>
      <Link to={`/Detail/${id}`}>
        <h2 className={style.cardContainerh2}>{name}</h2>
      </Link>

      <h2 className={style.cardContainerh3}>{species}</h2>
      <h2 className={style.cardContainerh3}>{gender}</h2>
      <h2 className={style.cardContainerh3}>{status}</h2>
      <h2 className={style.cardContainerh3}>{origin}</h2>
      <img className={style.cardContainerImg} src={image} alt="" />

      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>♡</button>
      )}
    </div>
  );
}

const mapDispatchToProps = {
  addFav,
  removeFav,
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
