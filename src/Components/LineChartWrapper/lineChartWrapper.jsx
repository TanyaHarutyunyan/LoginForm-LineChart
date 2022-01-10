import React from "react";
import LineChartLinksBar from '../LineChartLinksBar/lineChartLinksBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./lineChartWrapper.css"

function LineChartWrapper (){
    return (
        <div>
            <h1>COVID_19</h1>
            <LineChartLinksBar />
        </div>
    )
}

export default LineChartWrapper