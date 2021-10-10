import React, { useState, useEffect } from "react";

const ItemDetail = ({ match }) => {
  const [item, setItem] = useState({
    images: {},
  });

  useEffect(() => {
    infos();
    console.log(match);
    // eslint-disable-next-line
  }, []);

  const infos = () => {
    fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data.item);
        setItem(data.data.item);
      });
  };

  return (
    <div className="item-img">
      <h1>{item.name}</h1>
      <img src={item.images.background} alt="images" />
    </div>
  );
};

export default ItemDetail;
