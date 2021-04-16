/* eslint-disable no-useless-constructor */
import React from "react";
import ReactDOM from "react-dom";
import SeasonsDisplay from "./SeasonDisplay";

class App extends React.Component {
   
 state = { lat: null, errMessage: "" };

 componentDidMount() {
  window.navigator.geolocation.getCurrentPosition(
   (postion) => {
    this.setState({ lat: postion.coords.latitude });
   },
   (err) => {
    this.setState({ errMessage: err.message });
   }
  );
 }

 render() {
  return (
   <div>
    {this.state.errMessage ? (
     <div>Error: {this.state.errMessage}</div>
    ) : this.state.lat ? (
     <SeasonsDisplay lat={this.state.lat} />
    ) : (
     "Loading..."
    )}
   </div>
  );
 }
}

ReactDOM.render(<App />, document.getElementById("root"));