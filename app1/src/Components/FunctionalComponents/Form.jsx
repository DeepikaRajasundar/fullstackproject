import "../css/Form.css";
const Form=()=>{
    return(<section>
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