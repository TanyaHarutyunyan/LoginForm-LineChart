import React from "react"
import Plot from 'react-plotly.js';
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import classes from "./lineChartDeaths.module.css"

function LineChartDeaths () {
	let navigate = useNavigate()
	const [countryName, setCountryName] = useState([])
	const [deathsCovid, setDeathsCovid] = useState([])
        const api = fetch("https://corona-api.com/countries")
		.then((response) => {
            return response.json()})
		.then((response) => {
			return response
		})

		api.then((response) => {
			let result = response.data.filter((val) => {
				return val.population > 20000000
			}).map((val) => {
				return val.name
			})
			setCountryName(result)}
		)

		api.then((response) => {
			let result = response.data.filter((val) => {
				return val.population > 20000000
			}).map((val) => {
				return val.latest_data.deaths
			})
			setDeathsCovid(result)
		})

		function goBack (){
			navigate("/lineChartWrapper")
		}

		return (
			<div>
			<div>
				<button className={classes.btn} onClick={goBack}>Back</button>
			</div>
			<div>
			<Plot 
				data={[
					{
						x: countryName,
						y: deathsCovid,
						type: 'scatter'
					}
				]}
				layout={ { width: 1300, height: 500, title: 'Total deaths cases from COVID-19 in coutries with more than 20million population'}}
			/>
			</div>
			</div>
		)

}

export default LineChartDeaths