import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/pages/home/Home';
import Projects from './components/pages/projects/Projects';
import News from './components/pages/news/News';
import About from './components/pages/about/About';
import Footer from './components/footer/Footer';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="mt-xl-5 mt-lg-4 mt-md-3 mt-3 ml-xl-5 mr-xl-5 ml-lg-4 mr-lg-4 ml-md-3 mr-md-3 ml-3 mr-3">
      <BrowserRouter>
        <div className="mb-lg-5">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/news" component={News} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
