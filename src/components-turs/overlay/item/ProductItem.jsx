import style from "./productItem.module.css"

const ProductItem=(props)=>{


    return(
        <div className={style.product_item}>
        <img className={style.product_img} src={props.img} alt="tour" />
        <h3>
          {props.title}
          <br />
          <span>{props.price}</span>
        </h3>
        <button onClick={()=>props.deleteItem(props.id)}>X</button>
      </div>

    )
}

export default ProductItem;