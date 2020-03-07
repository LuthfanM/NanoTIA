import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Interweave from 'interweave';
import Image from 'react-bootstrap/Image'

class SingleScreen extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { title, contents, image } = this.props.location.state

        return (
            <div>
            <div className="App">
                <p>Tech In Asia Content</p>
            </div>
            <Card>
                <Card.Title>
                    <Interweave content={title} />
                </Card.Title>
                <Card.Body>
                    <Image src={image} thumbnail />
                </Card.Body>
                <Card.Body>   
                    <Interweave content={contents} />
                </Card.Body>
            </Card>
            </div>
        );
    }

}

export default SingleScreen;

