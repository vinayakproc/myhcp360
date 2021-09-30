import React from "react";
import './Scatterplot.css'
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  Cell,
  Label,
} from "recharts";

const ScatterChartPlot = (props) => {

  const data = [
    { x: 70, y: 45, z: " Anand Shah, MD" },
    { x: 79, y: 33, z: " Andrew Picel" },
    { x: 74, y: 21, z: " Ashish K. Jha, MD, MPH" },
    { x: 54, y: 29, z: " David B. Wilson, MD" },
    { x: 50, y: 41, z: " David S. Cheng, MD" },
    { x: 44, y: 38, z: " Edward Fox MD PhD" },
    { x: 68, y: 54, z: " Eric Padron MD" },
    { x: 33, y: 50, z: " Jarred Reed" },
    { x: 39, y: 10, z: " Katie Wakeley MD" },
    { x: 44, y: 38, z: " Rahul Ravilla, MD" },
    { x: 68, y: 54, z: " Raj Patel" },
    { x: 33, y: 40, z: " Syed Mohi Ahmed" },
    { x: 39, y: 15, z: " Thanh Nguyen" },
    { x: 44, y: 32, z: " Vidya Kora, MD" },
    { x: 68, y: 51, z: " Young Kim" },
    { x: 33, y: 43, z: " Zaid Abdel-Rahman" },
    { x: 100, y: 100, z: " Maxmimum Range" },
  ];

  const COLORS = ["#808080"];
 
  return (
    <ScatterChart
      width={500}
      height={props.height}
      margin={{
        top: 20,
        right: 40,
        bottom: 20,
        left: 20,
      }}
    >
      <CartesianGrid />
      {/* <Legend verticalAlign="top" height={50}  align="center"/> */}
      <XAxis type="number" dataKey="x" name="PR Savvy" unit="%" tick={{fontSize:10}}>
        <Label value="PR Savvy" offset={-15} position="insideBottom" />
      </XAxis>
      <YAxis
        type="number"
        dataKey="y"
        tick={{fontSize:10}}  
        name="Research Focused"
        unit="%"
        label={{
          value: "Research Focused",
          offset: 5,
          angle: -90,
          position: "insideLeft",
          
        }}
      />
      <ZAxis type="category" dataKey="z" name="HCP Name" />
      <Scatter name="HCP Segment Distribution" data={data} fill="#808080">
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Scatter>
      <Tooltip cursor={{ strokeDasharray: "3 3" }} />
      <ReferenceLine y={50} stroke="#000000" />
      <ReferenceLine x={50} stroke="#000000" />
      {/* <ReferenceLine
        segment={[
          {
            x: 50,
            y: 50,
          },
          {
            x: 50,
            y: 50,
          },
        ]}
        label={{
          value: "(50 ,50)",
          position: "bottom",
        }}
      /> */}

      <ReferenceLine
        segment={[
          {
            x: 25,
            y: 100,
          },
          {
            x: 25,
            y: 100,
          },
        ]}
        label={{
          value: "Low",
          position: "top",
          stroke: "#DE3163",
        }}
      />

      <ReferenceLine
        segment={[
          {
            x: 100,
            y: 25,
          },
          {
            x: 100,
            y: 25,
          },
        ]}
        label={{
          value: "Low",
          position: "right",
          stroke: "#DE3163",
        }}
      />

      <ReferenceLine
        segment={[
          {
            x: 75,
            y: 100,
          },
          {
            x: 75,
            y: 100,
          },
        ]}
        label={{
          value: "High",
          position: "top",
          stroke: "#90EE90",
        }}
      />

      <ReferenceLine
        segment={[
          {
            x: 100,
            y: 75,
          },
          {
            x: 100,
            y: 75,
          },
        ]}
        label={{
          value: "High",
          position: "right",
          stroke: "#90EE90",
        }}
      />
    </ScatterChart>
  );
};

export default ScatterChartPlot;
