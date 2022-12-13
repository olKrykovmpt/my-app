import React from "react";
import FavoritesItem from "./Favoritesitem/FavoritesItem";
import axios from "axios";
import style from "./favorites.module.css";
import { AppContext } from "../../App";

const Favorites = (props) => {
  const context=React.useContext(AppContext)

  const onAddOverlay = (obj) => {
    axios.post("https://638f3aa14ddca317d7f21cb0.mockapi.io/cart", obj);
    context.setOverlayItems([...props.overlayItems, obj]);
  };

  const onDeleteFav = (id) => {
    axios.delete(`https://638f3aa14ddca317d7f21cb0.mockapi.io/favorites/${id}`);
    context.setFavorites((fav) => fav.filter((item) => item.id !== id));
  };

  return (
    <div className={style.cart_section}>
      <div className={style.search}>
        <h2>FAVORITES GOODS:</h2>
      </div>

      <div className={style.cart}>
        {props.favorites.map((obj) => {
          return (
            <FavoritesItem
              key={obj.id}
              id={obj.id}
              title={obj.title}
              price={obj.price}
              img={obj.img}

              onDeleteFav={(id) => {
                onDeleteFav(id);
              }}
              onPlus={(cartObj) =>{onAddOverlay(cartObj)}}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Favorites;
