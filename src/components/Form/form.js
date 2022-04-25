import React from "react";
import "./form.css";

function Form(props) {
    return (
        <form className="form" onSubmit={props.getData}>
            <div className="api">
                <input className="input" type="text" name="url" placeholder="http://api.url.here" />
                {/* <button onClick={props.getData}>Go!</button> */}
                <input className= "btn" type="submit" value="Go!"/>
            </div>
            <div className="methods">
                <button className="method" name ="GET">GET</button>
                <button className="method" name = "POST">POST</button>
                <button className="method" name = "PUT">PUT</button>
                <button className="method" name = "DELETE">DELETE</button>
                {/* <span className="method">GET</span>
                <span className="method">POST</span>
                <span className="method">PUT</span>
                <span className="method">DELETE</span> */}
                <textarea name="body"  ></textarea>
            </div>
        </form>
    )
}
export default Form;