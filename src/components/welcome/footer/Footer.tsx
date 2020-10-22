import React from 'react';
import './Footer.scss';

export default class Footer extends React.Component {
    render() {
        let date = new Date();
        let year = date.getFullYear();
        return (
            <div className="footer-wrapper">
                <div className='footer-background'>
                    <p className='pt-5 footer-text typewriter-text'>Carla de Beer | cadebe.dev</p>
                    <p className='footer-text'>August 2020</p>
                    <div className='tag-style'>
                        <button type='button' className='ml-5 mt-5 btn btn-info-local'>Software Engineering</button>
                        <button type='button' className='ml-2 mt-5 btn btn-info-local'>Machine Learning</button>
                    </div>
                    <div className='tag-style'>
                        <button type='button' className='ml-5 mt-2 btn btn-info-local'>Full-Stack Development</button>
                        <button type='button' className='ml-2 mt-2 btn btn-info-local'>Backend Development</button>
                    </div>
                    <p className='pb-3 footer-text-small mb-lg-2' style={{marginTop: '200px'}}>Built with React and
                        deployed on AWS • {year}</p>
                </div>
            </div>
        )
    }
}
