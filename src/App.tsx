import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/welcome/pages/home/Home';
import Projects from './components/welcome/pages/projects/Projects';
import Blog from './components/welcome/pages/blog/Blog';
import About from './components/welcome/pages/about/About';
import Header from './components/welcome/header/Header';
import Footer from './components/welcome/footer/Footer';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="mt-5 ml-5 mr-5">
      <BrowserRouter>
        <Header />
        <div className="mb-lg-5">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/blog" component={Blog} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
