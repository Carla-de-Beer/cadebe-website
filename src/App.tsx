import React from 'react';
import './App.scss';
import Content from './components/welcome/content/Intro';
import ProjectTiles from './components/welcome/projectTiles/ProjectTiles';
import Footer from './components/welcome/footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div>
            <div className='mt-4 ml-5 mr-5 mb-5'>
                <Content/>
                <ProjectTiles/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default App;
