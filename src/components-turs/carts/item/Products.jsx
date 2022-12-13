import style from "./products.module.css";
import React from "react";
import { AppContext } from "../../../App";

const Products = (props) => {
  const context = React.useContext(AppContext);

  const [added, setAdded] = React.useState(props.isAdded);
  const [fav, setFav] = React.useState(false);

  const onClickFav = () => {
    setFav(!fav);
    let id = props.id;
    let myId = props.myId;
    let title = props.title;
    let description = props.descriptionl;
    let price = props.price;
    let img = props.img;
    props.fav_btn({ id, myId, title, description, price, img });
  };

  const onClickAdd = () => {
    setAdded(!added);
    let id = props.id;
    let myId = props.myId;
    let title = props.title;
    let description = props.descriptionl;
    let price = props.price;
    let img = props.img;
    props.onPlus({ id, myId, title, description, price, img });
  };

  return (
    <div className={style.cart_item}>
      {context.isFav(props.myId)==false ? (
        <button className={style.fav_btn} onClick={onClickFav}>
          Add to favorites
        </button>
      ) : (
        <button className={style.fav_btn_add} onClick={onClickFav}>
          Added to favorites
        </button>
      )}

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
          {context.isAdded(props.myId) ? (
            <img width={13} src={context.isAdded(props.myId) ? "/img/icon.png" : ""} alt="hi" />
          ) : (
            "leave a request"
          )}
        </button>
      </p>
    </div>
  );
};

export default Products;
