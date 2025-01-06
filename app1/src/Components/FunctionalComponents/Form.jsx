import "../css/Form.css";
import NavBar from "./NavBar";

const Form=()=>{
    return(<section>
      <NavBar />
        <h1 style={{textAlign:"center"}}>This is form page</h1>
  <label>Name</label>
  <input type="text" name="name"/>
  <label>Email</label>
  <input type="text" name="email"/>
  <button type="submit">Submit</button>
    </section>
    );
  }
  export default Form;