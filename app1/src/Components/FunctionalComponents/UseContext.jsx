import { createContext } from "react";
import React from "react";
import Component2 from "./contextComponents/Component2";
export var ThemeProvider = React.createContext();
var ExamResults = () => {

    return (
        <section>
            <ThemeProvider.Provider value={{cgpa:"10.00",gpa:"9.98"}}>
                <h1>This is a example of UseContext</h1>
                <Component2 />
            </ThemeProvider.Provider>
        </section>
    )

}
export default ExamResults;