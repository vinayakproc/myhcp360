import React from "react"
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
  }  from 'recharts'


const MultilineChart = props => {

  const Chartheight = props.height;
  console.log(Chartheight);

    const data = [
        {
          "name": "Jan'21",
          "Imbruvica": 4000,
          "Calquence": 2400,
          "Brukinza": 2400,
          "Venclexta" : 1100
        },
        {
          "name": "Feb'21",
          "Imbruvica": 3000,
          "Calquence": 1398,
          "Brukinza": 2210,
          "Venclexta" : 1500
        },
        {
          "name": "Mar'21",
          "Imbruvica": 2000,
          "Calquence": 5800,
          "Brukinza": 2290,
          "Venclexta" : 1800
        },
        {
          "name": "Apr'21",
          "Imbruvica": 2780,
          "Calquence": 3908,
          "Brukinza": 2000,
          "Venclexta" : 1300
        },
        {
          "name": "May'21",
          "Imbruvica": 1890,
          "Calquence": 4800,
          "Brukinza": 2181,
          "Venclexta" : 2100
        },
        {
          "name": "Jun'21",
          "Imbruvica": 2390,
          "Calquence": 3800,
          "Brukinza": 2500,
          "Venclexta" : 1260
        },
        {
          "name": "Jun'21",
          "Imbruvica": 3490,
          "Calquence": 4300,
          "Brukinza": 2100,
          "Venclexta" : 1400
        }
      ]
    

    return(
        <LineChart width={500} height={330} data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Imbruvica" stroke="#009EDF" />
        <Line type="monotone" dataKey="Calquence" stroke="#DC4405" />
        <Line type="monotone" dataKey="Brukinza" stroke="#8B4513" />
        <Line type="monotone" dataKey="Venclexta" stroke="#005070" />
      </LineChart>
    );

}

export default MultilineChart;