import React from "react";
import "./Coin.css";
import { TrendingUp, TrendingDown } from "@material-ui/icons";

const Coin = ({
  name,
  image,
  symbol,
  price,
  volume,
  priceChange,
  marketcap,
}) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto" />
          <div className="name-symbol">
            <h1>{name}</h1>
            <p className="coin-symbol">{symbol}</p>
          </div>
        </div>
        <div className="all-data">
          <div className="price">
            <p className="coin-price">${price}</p>
            {priceChange < 0 ? (
              <div className="prize-difference">
                <TrendingDown className="icon-red" />
                <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
              </div>
            ) : (
              <div className="prize-difference">
                <TrendingUp className="icon-green" />
                <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
              </div>
            )}
          </div>
          <div className="other-data">
            <p className="coin-volume">Vol: ${volume.toLocaleString()}</p>
            <p className="coin-marketcap">
              Mkt Cap: ${marketcap.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coin;
