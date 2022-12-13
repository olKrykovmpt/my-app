import style from "./footer.module.css"

const Footer=()=>{
    return(
        <footer>
        <div className={style.footer_logo}>
        LIVE-TOUR
        </div>

        <p>
            telephone : +7(932)951-47-20
            <br />
            OOO "hello tours"
        </p>
    </footer>
    );
}

export default Footer;