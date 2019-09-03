import React, { Component } from 'react'
import { DrizzleContext } from "drizzle-react";
//import  ReadData  from './components/ReadData';
import  WriteData  from './components/WriteData';

class HomeView extends Component {
  render() {
    return (
      <DrizzleContext.Consumer>
        {drizzleContext => {
          const { drizzle, drizzleState, initialized } = drizzleContext;

          if (!initialized) {
            return "Loading...";
          }

          return (
            <div className="App">
              <WriteData drizzle={drizzle} drizzleState={drizzleState} />
            </div>
          );
        }}
      </DrizzleContext.Consumer>
    );
  }
}
export default HomeView
