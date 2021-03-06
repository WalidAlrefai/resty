import React from "react";
import "./results.scss"
import JSONPretty from 'react-json-pretty';
function Result(props) {
    if (!props.loading) {
        return (
            <div className="result">
                <div className="api">
                    {/* {console.log(props.methods, 'methods11')} */}
                    <div className='map'>
                        {
                            props.state.history.map((e,indx) => {
                                return (
                                    <div className="MM" key={indx}>
                                            <p className="method" style={e.payload.method === "POST" ? { backgroundColor: 'green' } : e.payload.method === "DELETE" ? { backgroundColor: 'red' } : e.payload.method === "PUT" ? { backgroundColor: 'yellow' } : {}}>{e.payload.method}</p>
                                            <p >{e.payload.url}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="body">
                    <JSONPretty data={props.header} />
                    <JSONPretty data={props.data} />
                </div>
            </div>
        )
    } else {
        return (
            <div className="result">
                <div className="api">
                    <p className="method" style={props.method === "POST" ? { backgroundColor: 'green' } : props.method === "DELETE" ? { backgroundColor: 'red' } : props.method === "PUT" ? { backgroundColor: 'yellow' } : {}}>{props.method}</p>
                    <p>{props.url}</p>
                </div>
                <div className="body">
                    <p>Loading...</p>
                </div>
            </div>
        )
    }
}
export default Result;