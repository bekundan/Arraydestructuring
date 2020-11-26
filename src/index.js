// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

//array destructring
const [honda, tesla] = cars;
const {
  speedStats: { topSpeed: hondaTopSpeed, zeroToSixty: hondaZerotoSixty }
} = honda;
const {
  speedStats: { topSpeed: teslaTopSpeed, zeroToSixty: teslaZerotoSixty }
} = tesla;
const {
  coloursByPopularity: [hondaTopColour]
} = honda;
const {
  coloursByPopularity: [teslaTopColour]
} = tesla;
// console.log(honda);

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>ZeroToSixty</th>
      <th>Top Colour</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td> {teslaTopSpeed}</td>
      <td>{teslaZerotoSixty}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaZerotoSixty}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
