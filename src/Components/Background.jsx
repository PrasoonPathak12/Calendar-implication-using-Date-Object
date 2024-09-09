import React from "react";
import Query from "./Query"
import CalendarComponent from './CalendarComponent';

const Background=()=>{
    return (
        <div className="container">
            <Query/>
            <CalendarComponent/>
        </div>
    )
}
export default Background;