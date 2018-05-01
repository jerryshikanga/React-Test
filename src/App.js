import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.data = {"front_seats":{"seats":{"1":[{"id":1,"title":"Driver","booked":1,"is_driver":1},{"id":2,"title":"F1","booked":1},{"id":3,"title":"F1","booked":0}]}},"other_seats":{"seats":{"1":[{"id":4,"title":"1A","booked":1},{"id":5,"title":"1B","booked":1},{"id":6,"title":"1C","booked":0},{"id":7,"title":"1D","booked":0}],"2":[{"id":7,"title":"1A","booked":1},{"id":8,"title":"1B","booked":1},{"id":9,"title":"1C","booked":0},{"id":10,"title":"1D","booked":0}],"3":[{"id":11,"title":"2A","booked":1},{"id":12,"title":"2B","booked":1},{"id":13,"title":"2C","booked":0},{"id":14,"title":"2D","booked":0}],"4":[{"id":15,"title":"3A","booked":1},{"id":16,"title":"3B","booked":1},{"id":17,"title":"3C","booked":1},{"id":18,"title":"3D","booked":1}],"5":[{"id":19,"title":"5A","booked":1},{"id":20,"title":"5B","booked":1},{"id":21,"title":"5C","booked":0},{"id":22,"title":"5D","booked":0}],"6":[{"id":23,"title":"6A","booked":1},{"id":24,"title":"6B","booked":1},{"id":25,"title":"6C","booked":0},{"id":26,"title":"6D","booked":0}],"7":[{"id":27,"title":"7A","booked":1},{"id":28,"title":"7B","booked":1},{"id":29,"title":"7C","booked":0},{"id":30,"title":"7D","booked":0}],"8":[{"id":31,"title":"8A","booked":1},{"id":32,"title":"8B","booked":1},{"id":33,"title":"8C","booked":0},{"id":34,"title":"8D","booked":0}]}}}
  }

  FrontSeat = () => {
    const data = this.data.front_seats.seats['1'];
    let frontseat = data.map((seat) => 
      <td className={seat.booked ? 'booked' : 'notbooked'} key={seat.id}>{seat.title}</td>
    );
    return(
      <table>
        <tbody>
          <tr>
            {frontseat}
          </tr>
        </tbody>
      </table>
    );
  }

  OtherSeats = () => {
    const data = this.data.other_seats.seats;
    let rows = [];
    for(let key in data){
      if(data.hasOwnProperty(key)){
        // let row = document.createElement('tr');
        let seats = data[key].map((seat, index) => 
          <div className={(index !== 0 && index%2 === 0) ? 'spaceleft' : ''}>
            <div className={seat.booked ? 'booked' : 'notbooked'} key={seat.id}>{seat.title}</div>
          </div>
          
       );
        rows.push(seats)
      }
    }

    let table = rows.map((row, index) => 
      <div key={index} className="row-layout">{row}</div>
    );

    return(
      <div className="column-layout table2">
        {table}
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bus Layout</h1>
        </header>
          {this.FrontSeat()}
          {this.OtherSeats()}
          <p>Green --- Booked</p>
          <p>Red   --- Not Booked</p>
      </div>
    );
  }
}

export default App;
