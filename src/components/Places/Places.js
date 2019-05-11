import React from 'react';
import PlaceCard from '../PlaceCard/PlaceCard';
import PropTypes from "prop-types";

const Places = ({places, onClick}) => (
  <>
    { places.map((place) => (
      <PlaceCard
        key={place.title}
        title={place.title}
        price={place.price}
        type={place.type}
        onClick={onClick}
      />
    )) }
  </>
);

Places.propTypes = {
  places: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
  })),
  onClick: PropTypes.func.isRequired,
};

export default Places;
