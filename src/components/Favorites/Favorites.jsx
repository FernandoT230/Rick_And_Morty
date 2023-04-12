import React from "react";
import { connect } from "react-redux";
import Card from "../Card/Card";

function Favorites(props) {
  const { myFavorites } = props;

  return (
    <div>
      <h1>Favorites</h1>
      {myFavorites.map((favorite) => (
        <Card
          key={favorite.id}
          id={favorite.id}
          name={favorite.name}
          status={favorite.status}
          species={favorite.species}
          gender={favorite.gender}
          origin={favorite.origin}
          image={favorite.image}
        />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps)(Favorites);
