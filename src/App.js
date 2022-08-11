import './App.css';

import React, { Component } from 'react'
import Navbar from './component/Navbar';
import LoadingBar from 'react-top-loading-bar'
import News from './component/News';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";


export default class App extends Component {
  state={
    progress:0
  }
  
  setprogress=(progress)=>{
  this.setState({progress: progress})
  }
  render() {
    return (
      <BrowserRouter>
      <LoadingBar
      height={3}
        color='#FF6F61'
        progress={this.state.progress}
       
      />
   <Navbar/>
        <Routes>
          <Route exact path='/' element= { <News setProgress={this.setprogress}  key="Home" pageSize={5} country="in" category="general"/> }/>
          <Route exact path='/entertainment' element= { <News setProgress={this.setprogress}  key="entertainment" pageSize={5} country="in" category="entertainment"/> }/>
          <Route exact path='/business' element= { <News setProgress={this.setprogress}  key="business" pageSize={5} country="in" category="business"/> }/>
          <Route exact path='/health' element= { <News setProgress={this.setprogress}  key="health" pageSize={5} country="in" category="health"/> }/>
          <Route exact path='/science' element= { <News setProgress={this.setprogress}  key="science" pageSize={5} country="in" category="science"/> }/>
          <Route exact path='/sports' element= { <News setProgress={this.setprogress}  key="sports" pageSize={5} country="in" category="sports"/> }/>
          <Route exact path='/technology' element= { <News setProgress={this.setprogress}  key="technology" pageSize={5} country="in" category="technology"/> }/>
        </Routes>
      </BrowserRouter>
    )
  }
}
