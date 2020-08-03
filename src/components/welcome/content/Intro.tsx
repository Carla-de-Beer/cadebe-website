import React from 'react';
import './Intro.scss';
import Card from 'react-bootstrap/Card';

export default class Content extends React.Component {
    render() {
        return (
            <div className='content-wrapper'>
                <div className='text-fields' style={{paddingTop: '30px'}}>
                    <h1 className='mt-2 header-text'>cadebe</h1>
                    <p>Carla de Beer</p>
                    <div className='mt-3'>
                    </div>
                </div>
                <div className='text-fields' style={{paddingTop: '30px'}}>
                    <h1 className='mt-2'>News</h1>
                    <div className='mt-5'>
                        <Card className='card-tile' style={{width: '40rem'}}>
                            <Card.Body>
                                <Card.Title>Carla's Development Website is Online!</Card.Title>
                                <Card.Text>
                                    I'm a software engineer involved in web development,
                                    machine learning, computational and generative design.
                                    What started off as an experiment on how to upload content to AWS S3 and
                                    integrating an SSL certificate with AWS CloudFront, seems to be morphing into a
                                    website.
                                    In the meanwhile, you can reach me on <a href="https://twitter.com/cadebe_"
                                                                             style={{fontSize: '16px'}}>Twitter</a>.
                                    Good stuff coming soon!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='text-fields' style={{paddingTop: '30px'}}>
                        <h1 className='mt-2'>Projects</h1>
                    </div>
                </div>
            </div>
        )
    }
}
