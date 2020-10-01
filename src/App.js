import React, { Component } from "react";
import "./App.css";
import Nav from "./components/nav";
import Home from './components/home';
import About from './components/aboutme';
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contact';
import Foot from './components/foot';
import { Link } from 'react-router-dom';

const container = {
  background: "linear-gradient(to right, #355c7d, #6c5b7b, #c06c84)",
  width: "100%",
  margin: 0,
  padding: 0,
  overflowX: "hidden"
}

class App extends Component {
  state={
    showComponentProjects: false
  }

  toggleProjects = e => this.setState({ showComponentProjects: !this.state.showComponentProjects })

  render() {
    return(
      <div style={container}>
        <Nav />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Foot />
      </div>
    )
  }
}


export default App;
