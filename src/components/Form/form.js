import React from "react";
import "./form.scss";
import { useState } from "react";
let m =[];
function Form(props) {
    
    const [method, setMethod] = useState("GET");
    const [url, setUrl] = useState("");
    const [body, setBody] = useState("");
    const handelMethod = (event) => {
        let elems = document.querySelectorAll('span');
        elems.forEach(elem => elem.style.backgroundColor = "white");
        document.getElementById(`${event.target.id}`).style.backgroundColor = "rgb(175, 176, 182)";
        setMethod(event.target.id);
    }
    const handelUrl = (event) => {
        event.preventDefault()
        setUrl(event.target.value);
    }
    const handelBody = (event) => {
        event.preventDefault()
        setBody(event.target.value);
    }
    const handelSubmit = (event) => {
        event.preventDefault();
        const data = {
            method: method,
            url: url,
            body: null
        }
        let action = {
            payload :{
                method: data.method,
                url: data.url,
                body: data.body,
            }
        }
        props.addHistory(action);
        if (body) {
            data.body = body;
        }
        // console.log(data.method);
        m.push({url:data.url, method:data.method});
        props.renderMethod(m)
        props.handelApi(data);
        
    }
    return (
        <form className="form" onSubmit={handelSubmit}>
            <div className="api">
                <input className="input" type="text" name="url" placeholder="http://api.url.here" onChange={handelUrl} />
                <input className="btn" type="submit" value="Go!" onClick={!props.isloading ? props.handleClick : null} />
            </div>
            <div className="methods">
                <span className="method" id="GET" onClick={handelMethod} >GET</span>
                <span className="method" id="POST" onClick={handelMethod} >POST</span>
                <span className="method" id="PUT" onClick={handelMethod}>PUT</span>
                <span className="method" id="DELETE" onClick={handelMethod} >DELETE</span>
                <textarea name="body" onChange={handelBody} defaultValue="{}"  ></textarea>
            </div>
        </form>
    )
}
export default Form;