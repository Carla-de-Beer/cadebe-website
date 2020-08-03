import React from 'react';
import './Footer.scss';

export default class Footer extends React.Component {
    render() {
        return (
            <div>
                <div className='mt-5'>
                    <p className='footer-text typewriter-text'>Carla de Beer | cadebe.dev</p>
                    <p className='footer-text'>August 2020</p>
                    <p className='footer-text-small mb-lg-2' style={{marginTop: '30px'}}>Built with React and deployed
                        on AWS</p>
                </div>
            </div>
        )
    }
}
