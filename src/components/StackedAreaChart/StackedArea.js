import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,Legend } from 'recharts';
import './StackedArea.css'

 const StackedAreaChart = props => {


    const data = [
        {
          "name": "Jan'21",
          Imbruvica: 4000,
          Calquence: 2400,
          Brukinza: 2400,
          Venclexta : 1100
        },
        {
          "name": "Feb'21",
          Imbruvica: 3000,
          Calquence: 1398,
          Brukinza: 2210,
          Venclexta : 1500
        },
        {
          "name": "Mar'21",
          Imbruvica: 2000,
          Calquence: 5800,
          Brukinza: 2290,
          Venclexta : 1800
        },
        {
          "name": "Apr'21",
          Imbruvica: 2780,
          Calquence: 3908,
          Brukinza: 2000,
          Venclexta : 1300
        },
        {
          "name": "May'21",
          Imbruvica: 1890,
          Calquence: 4800,
          Brukinza: 2181,
          Venclexta : 2100
        },
        {
          "name": "Jun'21",
          Imbruvica: 2390,
          Calquence: 3800,
          Brukinza: 2500,
          Venclexta : 1260
        },
        {
          "name": "Jun'21",
          Imbruvica: 3490,
          Calquence: 4300,
          Brukinza: 2100,
          Venclexta : 1400
        }
      ]
      
      const toPercent = (decimal) =>
        `${(decimal * 100).toFixed(0)}%`;
      
      const getPercent = (value, total) => {
        const ratio = total > 0 ? value / total : 0;
      
        return toPercent(ratio, 2);
      };

      
      
      const renderTooltipContent = (o) => {
        const { payload = [], label } = o;
        const total = payload.reduce(
          (result, entry) => result + entry.value,
          0
        );
      
        return (
          <div className="customized-tooltip-content border pr-1 BGColor">
            <p style={{  fontSize:13 }} className="total">{`${label}`}</p>
            <ul className="list">
              {payload.map((entry, index) => (
                <li key={`item-${index}`} style={{ color: entry.color , fontSize:10 }}>
                  {`${entry.name}: ${getPercent(entry.value, total)}`}
                </li>
              ))}
            </ul>
          </div>
        );
      };



    return (
        <AreaChart
        width={props.width}
        height={350}
        data={data}
        stackOffset="expand"
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" tick={{fontSize:10}}/>
        <YAxis tickFormatter={toPercent} tick={{fontSize:10}}/>
        <Tooltip content={renderTooltipContent} />
        <Legend iconSize={10} />
        <Area
          type="monotone"
          dataKey="Imbruvica"
          stackId="1"
          stroke="#009EDF"
          fill="#009EDF"
          fillOpacity={0.2}
        />
        <Area
          type="monotone"
          dataKey="Calquence"
          stackId="1"
          stroke="#DC4405"
          fill="#DC4405"
          fillOpacity={0.2}
        />
        <Area
          type="monotone"
          dataKey="Brukinza"
          stackId="1"
          stroke="#8B4513"
          fill="#8B4513"
          fillOpacity={0.2}
        />
        <Area
          type="monotone"
          dataKey="Venclexta"
          stackId="1"
          stroke="#005070"
          fill="#005070"
          fillOpacity={0.2}
        />
        
      </AreaChart>
    );
  }


export default StackedAreaChart;
