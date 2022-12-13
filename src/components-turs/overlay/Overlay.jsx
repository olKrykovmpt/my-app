import ProductItem from "./item/ProductItem";
import style from "./overlay.module.css";



const Overlay = (props) => {
  return (
    <div className={style.overlay}>
      <div className={style.product}>
        <div className={style.title_block}>
          <h2> Application form</h2>
          <button onClick={props.closeOverlay} className={style.close_btn}>
            X
          </button>
        </div>

        {props.overlayProp.length > 0 ? (
          <div className={style.product_list}>
            {props.overlayProp.map((obj) => {
              return (
                <p>
                  <ProductItem
                    key={obj.id}
                    id={obj.id}
                    title={obj.title}
                    price={obj.price}
                    img={obj.img}
                    deleteItem={props.deleteItem}
                    
                  />
                </p>
              );
            })}
          </div>
        ) : (
          <h1>there are not application</h1>
        )}

        <div className={style.total_price}>
          <p className={style.total_price_text}>Total:</p>
          <p className={style.total_price_summ}>{props.total_price}</p>
          <button>leave a request</button>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
