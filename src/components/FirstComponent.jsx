import Child  from "./Child";



const FirstComponent = () => {

  let myWidth ="50px";
  return (
    <div className="first">
      <h1>first title</h1>
      <p>simple text</p>
      <Child text =" text in props" width ={myWidth}/>
    </div>
  );
};

export default FirstComponent;
