const About=(props)=>{
    return(<section> 
        <h2 style={{textAlign:"center",fontSize:"50px"}}>Learning props concepts</h2>
        <h1>This is my about page</h1>
    <h2>I am studying in {props.college} College at {props.district}</h2>
    <h3>Other Colleges:{props.clg1},{props.clg2}</h3>
    
    </section>
    );

}
export default About;