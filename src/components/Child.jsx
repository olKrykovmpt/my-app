import logo from "../logo.svg";

const Child = (props)=> {
    return(
        <div>
            <hr/>
            <h2>{props.text}</h2>
            <img src={logo} style = {{width:props.width}} />
        </div>
    )
}

export default Child