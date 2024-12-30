import {useState} from 'react';
const Gallery=()=>{
    var [counter,setCount]=useState(0);
    function increment(){
        setCount(counter+1)
    }
    function decrement(){
        setCount(counter-1)
    }
    function reset(){
        setCount(0)
    }
    return(
        <section>
        <h2 style={{textAlign:"center",fontSize:"50px"}}>Learning state concepts</h2>
         <h1>This is my gallery page</h1>
 
        <h2 style={{fontFamily:"monospace"}}>The state of my variable count is {counter} </h2>
        <button onClick={increment} style={{fontSize:"30px",fontFamily:"cursive",margin:"10px"}}>Increment</button>
        <button onDoubleClick={decrement} style={{fontSize:"30px",fontFamily:"cursive",margin:"15px"}}>Decrement</button>
        <button style={{backgroundColor:"red",fontSize:"30px",fontFamily:"cursive",margin:"20px"}}onMouseOver={reset} >Reset</button>
         </section>
    );
}
export default Gallery;