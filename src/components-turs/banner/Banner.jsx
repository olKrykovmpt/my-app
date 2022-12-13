 import style from "./banner.module.css"
 import { Link } from "react-router-dom";
 
 const Bunner=()=>{
    return(
        <div className={style.banner_section}>
                <div className={style.banner}>
                    <p className={style.text_banner}>
                       Buy tours on-line!
                       <br />
                       <span>
                        without commission!
                       </span>
                       <br />
                       <Link exact to={'/form'}>
                       <button className={style.banner_btn}>
                        leave a request                            
                       </button>
                       </Link>

                    </p>
                </div>
            </div>

    );
 }

 export default Bunner;