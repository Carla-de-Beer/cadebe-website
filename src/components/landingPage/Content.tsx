import React from 'react';
import './Content.scss';

export default class Content extends React.Component {
    render() {

        const divStyle = {
            marginTop: '70px'
        };

        return (
            <div className='content-wrapper'>
                <div className='text-fields' style={{paddingTop: '30px'}}>
                    <h1 className='header-text'>Carla's Development Website is Online!</h1>
                    <h2>Good stuff coming soon!</h2>
                </div>
                <div className='text-fields'>
                    <div style={{marginTop: '40px'}}>
                        <p>I'm a software engineer involved in web development,
                            machine learning, computational and generative design.</p>
                    </div>
                    <div style={{marginTop: '50px'}}>
                        <p>What started off as an experiment on how to upload content to AWS S3 and</p>
                        <p>integrating an SSL certificate with AWS CloudFront, seems to be morphing into a website.</p>
                    </div>
                    <div style={{marginTop: '30px'}}>
                        <p>Stay tuned for the latest developments ... whilst this site is under construction.</p>
                        <p>In the meanwhile, you can reach me on <a href="https://twitter.com/cadebe_"
                                                                    style={{fontSize: '16px'}}>Twitter</a>.</p>
                    </div>
                    <div style={divStyle}>
                        <p className='footer-text typewriter-text'>Carla de Beer</p>
                        <p className='footer-text'>cadebe.dev</p>
                        <p className='footer-text'>July 2020</p>
                    </div>
                    <div style={divStyle}>
                        <p className='footer-text'>*</p>
                        <p className='footer-text-small' style={{marginTop: '30px'}}>Built with React and deployed on AWS</p>
                    </div>
                </div>
            </div>
        )
    }
}
