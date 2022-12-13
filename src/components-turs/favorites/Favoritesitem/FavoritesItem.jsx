import style from "./favoritesItem.module.css";
import React from "react";

const FavoritesItem = (props) => {
  const [added, setAdded] = React.useState(false);
  const [fav, setFav] = React.useState(false);

  const onClickFav = () => {
    setFav(!fav);
    let id = props.id;
    let title = props.title;
    let description = props.descriptionl;
    let price = props.price;
    let img = props.img;
    props.fav_btn({ id, title, description, price, img });
  };

  const onClickAdd = () => {
    setAdded(!added);
    let id = props.id;
    let title = props.title;
    let description = props.descriptionl;
    let price = props.price;
    let img = props.img;
    props.onPlus({id,  title, description, price, img });
  };

  const onDelete=()=>{
    props.onDeleteFav(props.id)
  }

  return (
    <div className={style.cart_item}>

        <button className={style.fav_btn_add} onClick={onDelete}>
          X
        </button>
      

      <img src={props.img} alt="" className={style.cart_img} />
      <h3 className={style.cart_title}>{props.title}</h3>
      <p className={style.cart_description}>
        to sochi from moscow
        <br /> 05/12/2022
      </p>
      <p className={style.price}>Price:</p>
      <p className={style.cart_price}>
        <span>{props.price}</span>
        <button className={style.add_cart} onClick={onClickAdd}>
          {added ? (
            <img width={13} src={added ? "/img/icon.png" : ""} alt="hi" />
          ) : (
            "leave a request"
          )}
        </button>
      </p>
    </div>
  );
};

export default FavoritesItem;
