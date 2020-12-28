import React, { useState, useEffect } from "react";

const ListDetails = ({ match }) => {
  const [details, setDetails] = useState([]);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false";

  const fetchDetails = async () => {
    const response = await fetch(url);
    const details = await response.json();

    setDetails(details);
    // if(match.params.id ===  )
  };

  const filterdetails = () => {};
  useEffect(() => {
    fetchDetails();
    console.log(match);
  }, []);
  const filterCoins = details.filter((item) => {
    if (item.id === match.params.id) {
      return item;
    }
  });
  return (
    <div className="container">
      {filterCoins.map((item) => {
        const {
          symbol,
          name,
          id,
          current_price,
          image,
          price_change_percentage_24h,
        } = item;
        return (
          <div key={id} className="wrapper">
            <div className="title">
              <img src={image} alt={symbol} />
              <h1>{name}</h1>
            </div>

            <div className="others">
              <p>${current_price}</p>
              {parseInt(price_change_percentage_24h) <= 0 ? (
                <p className="red">{parseInt(price_change_percentage_24h)}%</p>
              ) : (
                <p className="green">
                  {parseInt(price_change_percentage_24h)}%
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListDetails;
