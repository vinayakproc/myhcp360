import React from "react";
import HeatMap from "react-heatmap-grid";


const HeatMapGrid = props => {
    const xLabels = ["Twitter","Clinical Trials","Pubmeds"]

    const yLabels = ["Ibrutinib","Veneteclax","Calquence","Brukinsa","Others"]

    const data = [[10,40,-42],[-22,13,80],[-27,0,35],[10,-33,67],[22,-15,33]]

    const toPercent = (decimal) =>
        `${decimal}%`;

        const SelectBg = (value, min , max) =>{
          
            if(value<0)
            {
              return `rgb(255,0,0, ${(value+0.01)/min})`
            }
            else
            {
               return  `rgb(34,139,34, ${1 - (max - value) / (max - min)})`
            }
        }

    return(
           <HeatMap
            xLabels={xLabels}
            yLabels={yLabels}
            data={data}
            height = {54}
            xLabelWidth= {50}
            yLabelWidth= {100}
            cellStyle={(background, value, min, max, data, x, y) => (
                {
                background: SelectBg(value,min,max) ,
                fontSize: "13px",
                color: "#244"
              })}
              cellRender={value =>  <div>{toPercent(value)}</div>}
              unit="%"
           />
    );

}

export default HeatMapGrid;