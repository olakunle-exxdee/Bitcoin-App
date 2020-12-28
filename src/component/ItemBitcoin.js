import React, { useState, useEffect } from "react";
import List from "./List";

const ItemBitcoin = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false";

  const fetchBitcoin = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  };
  useEffect(() => {
    fetchBitcoin();
    return () => {
      setData([]);
    };
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const filterCoins = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      <div className="form-control">
        <form>
          <input
            type="text"
            className="input"
            placeholder="Search"
            onChange={handleChange}
          />
        </form>
      </div>
      <div className="container">
        {filterCoins.map((coin) => {
          return <List key={coin.id} {...coin} />;
        })}
      </div>
    </div>
  );
};

export default ItemBitcoin;
