import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Interweave from 'interweave';
import {Link} from 'react-router-dom';
var moment = require('moment');
require("moment/min/locales.min");

class Items extends Component {

    constructor(props) {
        super(props);
        this.state={
            linkUrl: ".",
            dataSend: "."
        }
    }

    componentDidMount(){
        const {data} = this.props; 

        this.setState({
            linkUrl: data.slug,
            title: data.title,
            image: data.featured_image.source,
            dataSend: data.content
        });
    }

    calculateTime(){
        const {data} = this.props; 

        var date = moment.utc().format('YYYY-MM-DD HH:mm:ss');
        var utcTime = moment.utc(date).toDate();
        var localTime = moment(utcTime).local().format();
        localTime = localTime.substr(0, localTime.indexOf('+')); 

        localTime = moment(""+localTime+"");
        var articleTime = moment(""+data.modified+"");
        
        var selisihHari = localTime.diff(articleTime, 'days');
        var selisihJam = localTime.diff(articleTime, 'hours'); 

        if(selisihHari==0)
        {
            selisihHari = "";
        }else{
            return selisihHari + " Hari lalu";
        }

        if(selisihJam>24)
        {
            selisihJam = ""
        }else{
            return selisihJam +" Jam lalu";
        }
    }

    render() {
        const {data} = this.props; 

        return (
            <Card>
                <Card.Body>   
                    <p>{data.categories[0].name}</p>
                    <Card.Title>
                        <Link to={{
                        pathname: this.state.linkUrl,
                        state: {
                            title: this.state.title,
                            image: this.state.image,
                            contents: this.state.dataSend
                        }
                        }}>
                            <Interweave content={data.title} />
                            </Link>
                        </Card.Title>  
                    <Card.Text>
                        <Interweave content={data.excerpt} />
                    </Card.Text>
                    <Card.Text>
                        <Image src={data.author.avatar_url} roundedCircle width={50} height={50} />
                        <p>{data.author.display_name} - {this.calculateTime()}</p>                       
                    </Card.Text>
                    <Card.Text>
                        <Image src={data.featured_image.attachment_meta.sizes.medium.url} thumbnail />
                    </Card.Text>                           
                </Card.Body>
            </Card>
        );
    }

}

export default Items;