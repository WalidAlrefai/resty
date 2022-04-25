import React from "react";
import Form from "../Form/form";
import Results from "../Results/results";

function Home(){
    const getData = (event)=>{
        event.preventDefault();
        console.log(event.target.url.value);
        console.log(event.target.method.value);
        data["url"] = event.target.url.value;
        data["method"] = event.target.method.value;
    };
    let data ={
    };
    return(
        <div className="home">
            <Form getData={getData}/>
            <Results/>
        </div>
    )
}
export default Home;