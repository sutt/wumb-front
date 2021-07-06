import React from 'react';


function Table({radioData, num}) {

  console.log(radioData[num])

  if (radioData ) {
  return (
    <div className="table">
      <table>
  <tr className ="table-header">
    <th>Time</th>
    <th>Artist</th>
    <th>Title</th>
  </tr>
  <tr className = 'row row-odd'>
    <td>{radioData[num].time}</td>
    <td>{radioData[num].artist}</td>
    <td>{radioData[num].title}</td>
  </tr>
  <tr className = 'row row-even'>
  <td>{radioData[1].time}</td>
    <td>{radioData[1].artist}</td>
    <td>{radioData[1].title}</td>
  </tr>
  <tr className = 'row row-odd'>
  <td>{radioData[2].time}</td>
    <td>{radioData[2].artist}</td>
    <td>{radioData[2].title}</td>
  </tr>
  <tr className = 'row row-even'>
    <td>{radioData[3].time}</td>
    <td>{radioData[3].artist}t</td>
    <td>{radioData[3].title}</td>
  </tr>
  <tr className = 'row row-odd'>
    <td>{radioData[4].time}</td>
    <td>{radioData[4].artist}</td>
    <td>{radioData[4].title}</td>
  </tr>
  <tr className = 'row row-even'>
    <td>{radioData[5].time}</td>
    <td>{radioData[5].artist}</td>
    <td>{radioData[5].title}</td>
  </tr>
</table>

    </div>
  );}
  else {
    return (
      <div>
      Loading, Please Wait!
      </div>
    )
  }
}

export default Table;