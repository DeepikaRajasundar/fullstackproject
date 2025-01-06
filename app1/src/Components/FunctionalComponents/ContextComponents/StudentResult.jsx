import { useContext } from "react";
import { ThemeProvider } from "../UseContext";

var StudentResult =()=>{
    var result=useContext(ThemeProvider);
    return(
        <section>
        <h3>Your CGPA is {result.cgpa} and GPA is {result.gpa}</h3>
        </section>
    );
}
export default StudentResult;