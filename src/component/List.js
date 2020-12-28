import React from "react";
import { Link } from "react-router-dom";

const List = ({
  symbol,
  name,
  id,
  current_price,
  image,
  price_change_percentage_24h,
}) => {
  return (
    <div key={id} className="wrapper">
      <div className="title">
        <img src={image} alt={symbol} />
        <h1>
          <Link className="name" to={`/items/${id}`}>
            {name}
          </Link>
        </h1>
      </div>

      <div className="others">
        <p>${current_price}</p>
        {parseInt(price_change_percentage_24h) <= 0 ? (
          <p className="red">{parseInt(price_change_percentage_24h)}%</p>
        ) : (
          <p className="green">{parseInt(price_change_percentage_24h)}%</p>
        )}
      </div>
    </div>
  );
};

export default List;
