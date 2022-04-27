import React from "react";
import Form from "../Form/form";
import Results from "../Results/results";
import {useState} from "react";
import axios from "axios";
import "./home.scss";

function Home(){
    const [data,setData]=useState(null);
    const [request,setRequest]=useState({});
    const handelApi = async(request)=>{
        setRequest(request);
        let chosenMethod = request.method.toLowerCase();
        const response = await axios[chosenMethod](request.url,(request.body)?(request.body):null);
        let result = {results:response.data}
        setData(result);
    }
    return(
        <div className="home">
            <Form handelApi={handelApi} />
            <Results data ={data} method = {request.method} url = {request.url} />
        </div>
    )
}
export default Home;