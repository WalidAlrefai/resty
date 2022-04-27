import React from "react";
import "./results.scss"
function Result(props){
    return(
        <div className="result">
            <div className="api">
                <p className="method" style={props.method === "POST" ? {backgroundColor : 'green'}:props.method === "DELETE" ? {backgroundColor : 'red'}:props.method === "PUT" ? {backgroundColor : 'yellow'}:{}}>{props.method}</p>
                <p>{props.url}</p>
            </div>
            <div className="body">
                <pre>{props.data ? JSON.stringify(props.data,undefined,3) : null}</pre>
            </div>
        </div>
    )
}
export default Result;