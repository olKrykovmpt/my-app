import Products from "./item/Products";
import style from "./carts.module.css";
import axios from "axios";


const Carts = (props) => {

  const onAddOverlay=async(obj)=>{
    try{
      const findOverlay=props.overlayItems.find(objOver=>objOver.myId===obj.myId)
      if(findOverlay){
        axios.delete(`https://638f3aa14ddca317d7f21cb0.mockapi.io/cart/${findOverlay.id}`)
        props.setOverlayItems((over)=>over.filter(item=>item.myId !==obj.myId))

      }else{
        const{data}=await
        axios.post('https://638f3aa14ddca317d7f21cb0.mockapi.io/cart', obj)
        props.setOverlayItems([...props.overlayItems, data]);
      }
    }catch{
      alert('mistake')
    }
    
}

  const onClickSearch=(inputValue)=>{
    props.setSearch(inputValue.target.value);
  }

  const onAddFav= async( obj)=>{
    try{
      const findFavorites=props.favorites.find(objFav=>objFav.myId===obj.myId)
      if(findFavorites){
        axios.delete(`https://638f3aa14ddca317d7f21cb0.mockapi.io/favorites/${findFavorites.id}`); 
        props.setFavorites((over)=>over.filter(item=>item.myId !==obj.myId))
      }else{
        const {data}=await
        axios.post('https://638f3aa14ddca317d7f21cb0.mockapi.io/favorites', obj)
        props.setFavorites([...props.favorites, data]);
      }
    }catch{
      alert('mistake')
    }


  }

  return (
    <div className={style.cart_section}>
      <div className={style.search}>
        <h2>TURS:</h2>
        <div className={style.search_block}>
          <img src="/img/search.png" alt="lupa" />
          <input onChange={onClickSearch} placeholder="search"></input>
        </div>
      </div>

      <div className={style.cart}>{

        // props.item.map(obj=>{
        //   return(
        //     <Products
        //     key={obj.id}
        //         name={obj.name}
        //         price={obj.price}

        //     />
        //   )
        // })

        props.item.filter((item)=>item.title.toLowerCase().includes(props.search.toLowerCase()))
        .map((obj) => {
          return (
            <Products
              id={obj.id}
              key={obj.id}
              myId={obj.myId}
              title={obj.title}
              price={obj.price}
              img={obj.img}

              fav_btn ={
                (favObj)=>{
                  onAddFav(favObj)
                }
              } 
              onPlus={(cartObj) => onAddOverlay(cartObj) }
            />
          );
        })}
      </div>
    </div>
  );
};

export default Carts;
