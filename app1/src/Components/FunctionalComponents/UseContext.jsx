import { createContext } from "react";
import React from "react";
import NavBar from "./NavBar";

import Component2 from "../ContextComponents/Component2";
export var ThemeProvider = React.createContext();
var ExamResults = () => {

    return (
        <section>
            <NavBar />
            <ThemeProvider.Provider value={{cgpa:"10.00",gpa:"9.98"}}>
                <h1>This is a example of UseContext</h1>
                <Component2 />
            </ThemeProvider.Provider>
        </section>
    )

}
export default ExamResults;